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
		"content": `<style>.vabadbbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.825 16.73l2.29-12.492A.9.9 0 0 1 8 3.5a.9.9 0 0 1 .885.738l2.29 12.492A1.5 1.5 0 0 1 9.7 18.5H6.3a1.5 1.5 0 0 1-1.475-1.77M2.5 20.5h11M6 9h4m-5 5h6m7-11h1a1.5 1.5 0 0 1 1.5 1.5v11.646a1.5 1.5 0 0 1-.158.671L19.5 18.5a1.118 1.118 0 0 1-2 0l-.842-1.683a1.5 1.5 0 0 1-.158-.671V4.5A1.5 1.5 0 0 1 18 3m-1.5 3h4m-4 10.5h4");
}
</style><path class="vabadbbnk"/>`,
		"fallback": "uix:incident-report",
	});
}

export default Component;
