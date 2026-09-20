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
		"content": `<style>.hhblplbic {
  fill: currentColor;
  d: path("M208 50H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V72a22 22 0 0 0-22-22M38 94h180v20h-58a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H38Zm10-32h160a10 10 0 0 1 10 10v10H38V72a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-58h52.47a38 38 0 0 0 75.06 0H218v58a10 10 0 0 1-10 10");
}
</style><path class="hhblplbic"/>`,
		"fallback": "ph:cardholder-light",
	});
}

export default Component;
