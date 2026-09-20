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
		"content": `<style>.yg24sacia {
  fill: currentColor;
  d: path("m229.66 157.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 160H128A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0a88.1 88.1 0 0 0 88 88h76.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="yg24sacia"/>`,
		"fallback": "ph:arrow-bend-down-right",
	});
}

export default Component;
