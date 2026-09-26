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
		"content": `<style>.ohujd2_nj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 10L22 9L22 4L2 4L2 20L12 20L13 20M1 9L2 9L22 9L23 9M16 14L22 20M22 14L16 20");
}
</style><path class="ohujd2_nj"/>`,
		"fallback": "keyline-icons:credit-card-x-sharp",
	});
}

export default Component;
