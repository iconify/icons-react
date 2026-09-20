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
		"content": `<style>.xbt4ymb3i {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5v-4.5a1.5 1.5 0 0 1 2.56-1.06l5 5q.171.17.276.378A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2zm6.854 6.147A.5.5 0 0 0 10 10.5v7a.5.5 0 0 0 .91.287l1.571-2.245l2.943.452a.5.5 0 0 0 .43-.848zM11 15.914v-4.207l3.066 3.067l-1.74-.268a.5.5 0 0 0-.486.207z");
}
</style><path class="xbt4ymb3i"/>`,
		"fallback": "fluent:cursor-hover-20-filled",
	});
}

export default Component;
