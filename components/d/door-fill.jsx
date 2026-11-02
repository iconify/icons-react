import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cjsov3rpn {
  fill: currentColor;
  d: path("M21 22H3a1 1 0 0 1 0-2h2V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v15h2a1 1 0 0 1 0 2m-6.99-11H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="cjsov3rpn"/>`,
		"fallback": "coolicons:door-fill",
	});
}

export default Component;
