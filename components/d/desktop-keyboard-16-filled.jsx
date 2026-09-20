import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p_70pdbbk {
  fill: currentColor;
  d: path("M3 1a2 2 0 0 0-2 2v5.997a2 2 0 0 0 2 2h1v1.011h-.494a.5.5 0 0 0 0 1H5V9.75A2.75 2.75 0 0 1 7.75 7H13V3a2 2 0 0 0-2-2zm3 8.5A1.5 1.5 0 0 1 7.5 8h6A1.5 1.5 0 0 1 15 9.5v4a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5zm2 4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m.5-3.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="p_70pdbbk"/>`,
		"fallback": "fluent:desktop-keyboard-16-filled",
	});
}

export default Component;
