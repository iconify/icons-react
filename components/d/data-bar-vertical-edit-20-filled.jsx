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
		"content": `<style>.hu0awwb-d {
  fill: currentColor;
  d: path("M15.81 10.548a1.87 1.87 0 1 1 2.644 2.644l-4.829 4.83a2.2 2.2 0 0 1-1.021.578l-1.498.375a.89.89 0 0 1-1.079-1.08l.374-1.497c.097-.387.297-.74.579-1.021zM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5-3a2 2 0 0 1 2 2v4.943l-1.727 1.727c-.41.41-.7.923-.84 1.485l-.176.7A2 2 0 0 1 8 15V8a2 2 0 0 1 2-2m5-3a2 2 0 0 1 2 2v4.006c-.69.032-1.37.308-1.898.835L13 11.943V5a2 2 0 0 1 2-2");
}
</style><path class="hu0awwb-d"/>`,
		"fallback": "fluent:data-bar-vertical-edit-20-filled",
	});
}

export default Component;
