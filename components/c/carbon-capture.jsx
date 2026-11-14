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
		"content": `<style>.hgfel6l_g {
  d: path("m3.271 19.268l.781-5A1.5 1.5 0 0 1 5.534 13h.932a1.5 1.5 0 0 1 1.482 1.268l.781 5A1.5 1.5 0 0 1 7.247 21H4.753a1.5 1.5 0 0 1-1.482-1.732M15.625 11h3.25a2.625 2.625 0 0 1 2.625 2.625v4.75A2.625 2.625 0 0 1 18.875 21h-3.25A2.625 2.625 0 0 1 13 18.375v-4.75A2.625 2.625 0 0 1 15.625 11M6 10.25q-1.5-2 0-4m3-.75C11.5 3 16.5 3 17.25 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u8j490b7n {
  d: path("m15.25 6.25l2 2l2-2m-6.25 8h8.5");
}
</style><g class="hntgybcog"><path class="hgfel6l_g"/><path class="u8j490b7n"/></g>`,
		"fallback": "uix:carbon-capture",
	});
}

export default Component;
