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
		"content": `<style>.j91izabkn {
  fill: currentColor;
  d: path("M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v4a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 9.5zm6 2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 0-1H7.5a.5.5 0 0 0-.5.5m-1 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0");
}
</style><path class="j91izabkn"/>`,
		"fallback": "fluent:button-16-filled",
	});
}

export default Component;
