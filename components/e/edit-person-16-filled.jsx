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
		"content": `<style>.wcyt1wbap {
  fill: currentColor;
  d: path("M10.529 1.764a2.621 2.621 0 1 1 3.707 3.707l-.514.514a3 3 0 0 0-1.4-.871L9.75 2.543zM8.5 8a3 3 0 0 1 2.361-2.932L9.043 3.25L2.657 9.635a2.96 2.96 0 0 0-.772 1.355l-.87 3.386a.5.5 0 0 0 .61.608l3.385-.869a2.95 2.95 0 0 0 1.354-.772l.642-.642a2.5 2.5 0 0 1 2.267-2.69A3 3 0 0 1 8.5 8m5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 13.75 8 12.5A1.5 1.5 0 0 1 9.5 11h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="wcyt1wbap"/>`,
		"fallback": "fluent:edit-person-16-filled",
	});
}

export default Component;
