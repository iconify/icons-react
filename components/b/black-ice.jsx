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
		"content": `<style>.f7b752nrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 2.75l-4.25 18.5M15 2.75l4.25 18.5M12 3.5V7m0 4.75v6m2.6-4.5l-5.2 3m5.2 0l-5.2-3");
}
</style><path class="f7b752nrw"/>`,
		"fallback": "iconoven:black-ice",
	});
}

export default Component;
