import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wpiwiseaq {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1 6h24v12.5a5.5 5.5 0 0 1-5.5 5.5h-13A5.5 5.5 0 0 1 4 23.5zm9 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="wpiwiseaq"/>`,
		"fallback": "fluent:archive-32-filled",
	});
}

export default Component;
