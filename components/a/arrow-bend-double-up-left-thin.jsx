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
		"content": `<style>.m16zfwzui {
  fill: currentColor;
  d: path("M82.83 149.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L37.66 104ZM128 100H89.66l41.17-41.17a4 4 0 0 0-5.66-5.66l-48 48a4 4 0 0 0 0 5.66l48 48a4 4 0 0 0 5.66-5.66L89.66 108H128a92.1 92.1 0 0 1 92 92a4 4 0 0 0 8 0a100.11 100.11 0 0 0-100-100");
}
</style><path class="m16zfwzui"/>`,
		"fallback": "ph:arrow-bend-double-up-left-thin",
	});
}

export default Component;
