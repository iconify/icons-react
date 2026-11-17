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
		"content": `<style>.cu6_2obnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M4 21V10l8-7l8 7v11m-10 0v-4a2 2 0 1 1 4 0v4");
}
</style><path class="cu6_2obnj"/>`,
		"fallback": "coolicons:house-alt-2-sharp",
	});
}

export default Component;
