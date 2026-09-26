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
		"content": `<style>.a65dndbws {
  fill: currentColor;
  d: path("M5 10L19 10C20.65685 10 22 11.34315 22 13L22 19C22 20.65685 20.65685 22 19 22L5 22C3.34315 22 2 20.65685 2 19L2 13C2 11.34315 3.34315 10 5 10Z");
  stroke: none;
}

.btw_rsbbl {
  d: path("M5 7H19M7 3H17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a65dndbws"/><path class="btw_rsbbl"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-fill",
	});
}

export default Component;
