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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jonbwv5rc {
  d: path("M6.125 2.5h6.75A2.625 2.625 0 0 1 15.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 3.5 18.875V5.125A2.625 2.625 0 0 1 6.125 2.5m.125 4h2m2.5 0h2m-6.5 4h2m2.5 0h2m-6.5 4h2m2.5 0h2");
}

.n_ga50b6a {
  d: path("M8 21.5v-4h3v4m7.75-4v4m0-7h.01");
}
</style><g class="hntgybcog"><path class="jonbwv5rc"/><path class="n_ga50b6a"/></g>`,
		"fallback": "uix:company-info",
	});
}

export default Component;
