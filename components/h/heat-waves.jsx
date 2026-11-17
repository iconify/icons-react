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
		"content": `<style>.b9jkivjkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 21q4-4.5 0-9t0-9m12 18q4-4.5 0-9t0-9m-6 18q4-4.5 0-9t0-9");
}
</style><path class="b9jkivjkn"/>`,
		"fallback": "coolicons:heat-waves",
	});
}

export default Component;
