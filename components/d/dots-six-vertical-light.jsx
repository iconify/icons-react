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
		"content": `<style>.m7s4w9b-k {
  fill: currentColor;
  d: path("M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="m7s4w9b-k"/>`,
		"fallback": "ph:dots-six-vertical-light",
	});
}

export default Component;
