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
		"content": `<style>.ioqz1k58e {
  fill: currentColor;
  d: path("M236 144a68.07 68.07 0 0 1-68 68H80a12 12 0 0 1 0-24h88a44 44 0 0 0 0-88H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L61 76h107a68.08 68.08 0 0 1 68 68");
}
</style><path class="ioqz1k58e"/>`,
		"fallback": "ph:arrow-u-up-left-bold",
	});
}

export default Component;
