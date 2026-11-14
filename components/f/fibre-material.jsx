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
		"content": `<style>.j6j--bcvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.5h11.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 17.75 6H6.25A1.75 1.75 0 0 1 4.5 4.25A1.75 1.75 0 0 1 6.25 2.5m0 15.5h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 6.25 18M7.5 6v12m9-12v12m-9-6l9-3");
}
</style><path class="j6j--bcvs"/>`,
		"fallback": "uix:fibre-material",
	});
}

export default Component;
