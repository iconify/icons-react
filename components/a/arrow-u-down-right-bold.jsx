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
		"content": `<style>.f_xedebwo {
  fill: currentColor;
  d: path("m232.49 176.49l-48 48a12 12 0 0 1-17-17L195 180H88a68 68 0 0 1 0-136h88a12 12 0 0 1 0 24H88a44 44 0 0 0 0 88h107l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17");
}
</style><path class="f_xedebwo"/>`,
		"fallback": "ph:arrow-u-down-right-bold",
	});
}

export default Component;
