import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ztn8f34qx {
  fill: currentColor;
  d: path("M8.283 4a2.5 2.5 0 0 0-1.697.664l-3.787 3.5a2.5 2.5 0 0 0 0 3.672l3.787 3.5A2.5 2.5 0 0 0 8.283 16H15.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zm.863 3.146a.5.5 0 0 1 .708 0L12 9.293l2.146-2.147a.5.5 0 0 1 .708.708L12.707 10l2.147 2.146a.5.5 0 0 1-.708.708L12 10.707l-2.146 2.147a.5.5 0 0 1-.708-.707L11.293 10L9.146 7.854a.5.5 0 0 1 0-.708");
}
</style><path class="ztn8f34qx"/>`,
		"fallback": "fluent:backspace-20-filled",
	});
}

export default Component;
