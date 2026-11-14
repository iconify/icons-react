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

.r470zbg-b {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12");
}

.saf423btt {
  d: path("M7.5 9.5c1.25-1.75 3.5-2 5.25-.75L15.5 7.5v4l-2.75-1.25c-1.75 1.25-4 1-5.25-.75");
}
</style><g class="hntgybcog"><path class="r470zbg-b"/><path class="saf423btt"/></g>`,
		"fallback": "uix:fishing-spot",
	});
}

export default Component;
