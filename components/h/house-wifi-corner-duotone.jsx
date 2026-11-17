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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ibuzlqy2z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8M15 18a2.83 2.83 0 0 1 4 0m-6-3a6.4 6.4 0 0 1 8 0m-4 6h.01");
}

.o_36udguo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.714 8H10a2 2 0 0 0-2 2v11H6a2 2 0 0 1-2-2v-8.092c0-.577.249-1.126.683-1.506l6-5.25a2 2 0 0 1 2.634 0Z");
}
</style><g class="ft5dv1b6b"><path class="o_36udguo"/><path class="ibuzlqy2z"/></g>`,
		"fallback": "coolicons:house-wifi-corner-duotone",
	});
}

export default Component;
