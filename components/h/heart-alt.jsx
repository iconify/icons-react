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
		"content": `<style>.k5jge9bek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 7l1-1a4.243 4.243 0 0 1 6 6l-6 6a1.414 1.414 0 0 1-2 0l-6-6a4.243 4.243 0 0 1 6-6z");
}
</style><path class="k5jge9bek"/>`,
		"fallback": "coolicons:heart-alt",
	});
}

export default Component;
