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
		"content": `<style>.dv54uh0ex {
  d: path("m12 2.5l9.5 4.25v9L12 20l-9.5-4.25v-9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3edwr-zb {
  d: path("M2.5 6.75L12 11l9.5-4.25m-19 4.5L12 15.5l9.5-4.25m-5.5 7V20a1.25 1.25 0 0 0 2.5 0v-3");
}
</style><g class="hntgybcog"><path class="dv54uh0ex"/><path class="n3edwr-zb"/></g>`,
		"fallback": "uix:baklava",
	});
}

export default Component;
