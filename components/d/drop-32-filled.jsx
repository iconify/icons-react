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
		"content": `<style>.pu3x1ib9d {
  fill: currentColor;
  d: path("M26 20c0 5.523-4.477 10-10 10S6 25.523 6 20c0-4.308 2.407-8.774 4.678-12.058a47 47 0 0 1 4.206-5.222C15.196 2.387 15.495 2 16 2c.509 0 .803.386 1.116.72a47 47 0 0 1 4.206 5.223C23.593 11.225 26 15.691 26 20");
}
</style><path class="pu3x1ib9d"/>`,
		"fallback": "fluent:drop-32-filled",
	});
}

export default Component;
