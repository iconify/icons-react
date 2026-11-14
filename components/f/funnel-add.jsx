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
		"content": `<style>.p1prwqban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h13.75l-4.75 6v6l-4.25 2v-8ZM19 2v5.5m-2.75-2.75h5.5");
}
</style><path class="p1prwqban"/>`,
		"fallback": "uix:funnel-add",
	});
}

export default Component;
