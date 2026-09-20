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
		"content": `<style>.tg0hd_wzw {
  fill: currentColor;
  d: path("M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v98.78l54.05-47.3a6 6 0 0 1 7.55-.28l60.11 45.08l60.34-52.8a6 6 0 0 1 7.9 9l-64 56a6 6 0 0 1-7.55.28l-60.11-45.04l-58.29 51V202h186a6 6 0 0 1 6 6");
}
</style><path class="tg0hd_wzw"/>`,
		"fallback": "ph:chart-line-light",
	});
}

export default Component;
