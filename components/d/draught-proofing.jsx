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
		"content": `<style>.tm6l-lbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h5.5a1.75 1.75 0 0 1 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 5.25 2.5m-1 15h7.25a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 11.5 21H4.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M10 10h.01M16 15h3.5a2 2 0 1 0-2-2M16 18.5h3.5A1.5 1.5 0 1 1 18 20");
}
</style><path class="tm6l-lbvz"/>`,
		"fallback": "uix:draught-proofing",
	});
}

export default Component;
