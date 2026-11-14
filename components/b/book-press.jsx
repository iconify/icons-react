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

.lhnuqalmb {
  d: path("M9 14h6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 15 17H9a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 9 14");
}

.rw52jubvw {
  d: path("M3 20.5h18m-16.5 0V7h15v13.5M12 3v11M8.5 3h7");
}
</style><g class="hntgybcog"><path class="rw52jubvw"/><path class="lhnuqalmb"/></g>`,
		"fallback": "uix:book-press",
	});
}

export default Component;
