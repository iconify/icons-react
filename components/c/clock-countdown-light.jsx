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
		"content": `<style>.w_3zgqbov {
  fill: currentColor;
  d: path("M230 136.49A102.12 102.12 0 1 1 119.51 26a6 6 0 0 1 1 12A90.13 90.13 0 1 0 218 135.51a6 6 0 1 1 12 1ZM122 72v56a6 6 0 0 0 6 6h56a6 6 0 0 0 0-12h-50V72a6 6 0 0 0-12 0m38-26a10 10 0 1 0-10-10a10 10 0 0 0 10 10m36 24a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24 36a10 10 0 1 0-10-10a10 10 0 0 0 10 10");
}
</style><path class="w_3zgqbov"/>`,
		"fallback": "ph:clock-countdown-light",
	});
}

export default Component;
