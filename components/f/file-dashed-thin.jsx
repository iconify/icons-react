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
		"content": `<style>.a778ep3hm {
  fill: currentColor;
  d: path("M76 224a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12v-32a4 4 0 0 1 8 0v32a4 4 0 0 0 4 4h16a4 4 0 0 1 4 4M212 88v48a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.66ZM80 28H56a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8m128 144a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-40a4 4 0 0 0-4-4M48 148a4 4 0 0 0 4-4v-40a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m104 72h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8");
}
</style><path class="a778ep3hm"/>`,
		"fallback": "ph:file-dashed-thin",
	});
}

export default Component;
