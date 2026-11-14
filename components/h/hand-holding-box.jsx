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
		"content": `<style>.i1dwj9bvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5H6l3.75 3H15l4.5-3.75a1.75 1.75 0 0 1 2 2.25L17 21H2.5M9.625 3h4.75A2.625 2.625 0 0 1 17 5.625v3.75A2.625 2.625 0 0 1 14.375 12h-4.75A2.625 2.625 0 0 1 7 9.375v-3.75A2.625 2.625 0 0 1 9.625 3M12 3v3.5");
}
</style><path class="i1dwj9bvg"/>`,
		"fallback": "uix:hand-holding-box",
	});
}

export default Component;
