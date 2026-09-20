import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cgmnqjbpe {
  fill: currentColor;
  d: path("M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.354 5.646L8 7.293l1.646-1.647a.5.5 0 0 1 .708.708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8L5.646 6.354a.5.5 0 1 1 .708-.708");
}
</style><path class="cgmnqjbpe"/>`,
		"fallback": "fluent:dismiss-circle-16-filled",
	});
}

export default Component;
