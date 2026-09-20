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
		"content": `<style>.e-anamb5q {
  fill: currentColor;
  d: path("M70 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 118a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="e-anamb5q"/>`,
		"fallback": "ph:dots-nine-light",
	});
}

export default Component;
