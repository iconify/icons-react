import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hr6nlnbcn {
  fill: currentColor;
  d: path("M230 144a62.07 62.07 0 0 1-62 62H80a6 6 0 0 1 0-12h88a50 50 0 0 0 0-100H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 82H168a62.07 62.07 0 0 1 62 62");
}
</style><path class="hr6nlnbcn"/>`,
		"fallback": "ph:arrow-u-up-left-light",
	});
}

export default Component;
