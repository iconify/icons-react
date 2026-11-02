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
		"content": `<style>.a1b4pqe1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 4l4 6l5-4l-1.403 7.716A4 4 0 0 1 15.662 17H8.338a4 4 0 0 1-3.935-3.284L3 6l5 4zM5 21h14");
}
</style><path class="a1b4pqe1y"/>`,
		"fallback": "coolicons:crown-round",
	});
}

export default Component;
