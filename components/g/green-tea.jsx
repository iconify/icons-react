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
		"content": `<style>.v_gbs8abc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.75h10v3.5a5 5 0 0 1-10 0ZM14 13a2.25 2.25 0 0 1 0 4.5M2.5 20.25h19m-4.5 0c0-3 2-4.5 4.5-4.5c0 3-2 4.5-4.5 4.5M9 8.75c-1.25-1.5 1.25-3 0-5");
}
</style><path class="v_gbs8abc"/>`,
		"fallback": "uix:green-tea",
	});
}

export default Component;
