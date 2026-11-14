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
		"content": `<style>.ud2wirbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 7l2.5-3h5L17 7Zm3.25 0h3.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 13.75 15h-3.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 10.25 7M12 15v6.5m-3 0h6M3 11h2.25m13.5 0H21");
}
</style><path class="ud2wirbvo"/>`,
		"fallback": "uix:garden-lights",
	});
}

export default Component;
