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
		"content": `<style>.bvr0f9bko {
  fill: currentColor;
  d: path("M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Zm-5.49 105.34L137.83 180l16.68 23.35a8 8 0 0 1-13 9.3L128 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L118.17 180l-16.68-23.35a8 8 0 1 1 13-9.3L128 166.24l13.49-18.89a8 8 0 0 1 13 9.3ZM92 152a8 8 0 0 1-8 8H72v48a8 8 0 0 1-16 0v-48H44a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m128 0a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8");
}
</style><path class="bvr0f9bko"/>`,
		"fallback": "ph:file-txt",
	});
}

export default Component;
