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
		"content": `<style>.soc0ncbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.366 5h9.268a1.75 1.75 0 0 1 1.697 1.326l2.625 10.5A1.75 1.75 0 0 1 19.259 19H4.741a1.75 1.75 0 0 1-1.697-2.174l2.625-10.5A1.75 1.75 0 0 1 7.366 5M12 5v14M5 9h14M4 13h16");
}
</style><path class="soc0ncbql"/>`,
		"fallback": "uix:gym-floor",
	});
}

export default Component;
