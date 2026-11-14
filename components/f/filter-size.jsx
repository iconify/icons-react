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
		"content": `<style>.zrjgwtdml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18M3 12v6m18-6v6M7 15v2m4-2v2.5m4-2.5v2m4-2v2.5");
}
</style><path class="zrjgwtdml"/>`,
		"fallback": "uix:filter-size",
	});
}

export default Component;
