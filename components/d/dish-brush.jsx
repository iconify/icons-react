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
		"content": `<style>.g3-0zi3ig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.53 5.813l5.657 5.657a2 2 0 0 1 0 2.828a2 2 0 0 1-2.828 0L9.702 8.641a2 2 0 0 1 0-2.828a2 2 0 0 1 2.828 0m0 5.657za1.5 1.5 0 0 1 0 2.121l-5.48 5.48a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l5.48-5.48a1.5 1.5 0 0 1 2.121 0m1.768-8.132l-2.121 2.121m4.242 0l-2.121 2.122m4.243 0l-2.122 2.121m4.243 0l-2.121 2.121");
}
</style><path class="g3-0zi3ig"/>`,
		"fallback": "uix:dish-brush",
	});
}

export default Component;
