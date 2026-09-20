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
		"content": `<style>.u7eg2qbxj {
  fill: currentColor;
  d: path("M17.962 14.691A.5.5 0 0 1 17.5 15h-6a.5.5 0 0 1 0-1h4.793L10.5 8.207l-2.146 2.147a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.708L8 9.293l2.146-2.147a.5.5 0 0 1 .708 0L17 13.293V8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.038.191");
}
</style><path class="u7eg2qbxj"/>`,
		"fallback": "fluent:arrow-trending-down-20-regular",
	});
}

export default Component;
