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
		"content": `<style>.sczyc2sgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.298 3.338L8.995 8.641l6.364 6.364l5.303-5.303m-4.243-4.243l-5.303 5.304m7.425-3.182l-5.304 5.303m-1.06-1.061l-7.248 7.248m-1.414-1.414l2.828 2.828");
}
</style><path class="sczyc2sgd"/>`,
		"fallback": "uix:garden-fork",
	});
}

export default Component;
