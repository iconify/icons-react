import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w6sgy9b3v {
  fill: currentColor;
  d: path("M7 4.5q0 .257-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.5 2.5 0 0 1-1 0V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.5 2.5 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.5 2.5 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95q.05.243.05.5M11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1zM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="w6sgy9b3v"/>`,
		"fallback": "fluent:group-20-regular",
	});
}

export default Component;
