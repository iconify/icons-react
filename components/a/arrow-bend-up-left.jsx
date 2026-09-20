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
		"content": `<style>.qcokutewg {
  fill: currentColor;
  d: path("M232 200a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88H51.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L51.31 96H128a104.11 104.11 0 0 1 104 104");
}
</style><path class="qcokutewg"/>`,
		"fallback": "ph:arrow-bend-up-left",
	});
}

export default Component;
