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
		"content": `<style>.ogimnlbgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a9.5 9.5 0 0 1 19 0Zm4.75-4.75l-2-2m6.75 0V3m4.75 4.75l2-2M12 12.5l-4.75-1.75m11.5 4.5c-1.25 1.5-2.75 3-2.75 4a2.75 2.75 0 0 0 5.5 0c0-1-1.5-2.5-2.75-4");
}
</style><path class="ogimnlbgv"/>`,
		"fallback": "uix:fuel-gauge",
	});
}

export default Component;
