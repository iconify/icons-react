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
		"content": `<style>.sx_wvtemc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v7m0 5v7M2.5 12h7m5 0h7M11 9.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 13v-2A1.5 1.5 0 0 1 11 9.5m7 6.75l1.596.665a.437.437 0 0 1-.096.835l-.443.074a1.5 1.5 0 0 0-1.233 1.233l-.074.443a.437.437 0 0 1-.835.096L16.25 18A1.338 1.338 0 0 1 18 16.25");
}
</style><path class="sx_wvtemc"/>`,
		"fallback": "uix:cad-cursor",
	});
}

export default Component;
