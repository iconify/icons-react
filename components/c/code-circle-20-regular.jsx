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
		"content": `<style>.zi5osubeh {
  fill: currentColor;
  d: path("M11.958 6.2a.5.5 0 1 0-.916-.4l-3.5 8a.5.5 0 1 0 .916.4zM6.854 7.646a.5.5 0 0 1 0 .708L5.207 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0m6.292.708a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.793 10zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="zi5osubeh"/>`,
		"fallback": "fluent:code-circle-20-regular",
	});
}

export default Component;
