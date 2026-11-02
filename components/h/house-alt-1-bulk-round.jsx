import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lb0burbka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 17a1 1 0 0 0-2 0v1a4 4 0 0 1-8 0v-5c0-1.317.335-2.748 1.293-3.707l4-4a5.243 5.243 0 0 1 7.414 0l4 4C20.665 10.252 21 11.683 21 13v5a4 4 0 0 1-8 0Z");
}
</style><path class="lb0burbka"/>`,
		"fallback": "coolicons:house-alt-1-bulk-round",
	});
}

export default Component;
