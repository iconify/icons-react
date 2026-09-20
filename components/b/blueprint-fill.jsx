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
		"content": `<style>.n1mbyppdd {
  fill: currentColor;
  d: path("M136 120h24v16h-24Zm104-56v136a8 8 0 0 1-8 8H48a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h16a8 8 0 0 1 8 8v16h160a8 8 0 0 1 8 8M56 48h-8a16 16 0 0 0-16 16v84.29A31.8 31.8 0 0 1 48 144h8Zm120 88v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16h-16a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16Z");
}
</style><path class="n1mbyppdd"/>`,
		"fallback": "ph:blueprint-fill",
	});
}

export default Component;
