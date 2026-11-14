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
		"content": `<style>.kzq0oi24o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h6m-3-3l3 3l-3 3m6-11h10m-7.375 5h4.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 18.875 15h-4.75a2.625 2.625 0 0 1-2.625-2.625v-.75A2.625 2.625 0 0 1 14.125 9m.125 3h4.5m-7.25 8h6");
}
</style><path class="kzq0oi24o"/>`,
		"fallback": "uix:go-to-definition",
	});
}

export default Component;
