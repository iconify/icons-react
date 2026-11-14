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
		"content": `<style>.bl48ahbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.554 19.448l.424-12.299a1.5 1.5 0 0 1 .511-1.077l2.523-2.208a1.5 1.5 0 0 1 1.976 0l2.523 2.208a1.5 1.5 0 0 1 .511 1.077l.424 12.299A1.5 1.5 0 0 1 14.947 21H9.053a1.5 1.5 0 0 1-1.499-1.552M3 21h18m-9-11v6.5");
}
</style><path class="bl48ahbht"/>`,
		"fallback": "uix:boundary-stone",
	});
}

export default Component;
