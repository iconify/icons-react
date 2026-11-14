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
		"content": `<style>.lrtv9b2pi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.427 4.5h9.646a1.5 1.5 0 0 1 1.342 2.171l-4.5 9a1.5 1.5 0 0 1-1.342.829H4.927a1.5 1.5 0 0 1-1.342-2.171l4.5-9A1.5 1.5 0 0 1 9.427 4.5M2.5 19.5h19m-9.75-15l-6 12M15 4.5l-6 12m9.25-12l-6 12");
}
</style><path class="lrtv9b2pi"/>`,
		"fallback": "uix:field-fallow",
	});
}

export default Component;
