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
		"content": `<style>.g3yryacrv {
  d: path("M8.75 17.5L11 11.75l2.25 5.75m-3.65-2h2.8m6.6-12v4m-2-2h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p5canbbjr {
  d: path("M11 2.75C14 6.5 17.25 10 17.25 14a6.25 6.25 0 0 1-12.5 0C4.75 10 8 6.5 11 2.75");
}
</style><g class="hntgybcog"><path class="p5canbbjr"/><path class="g3yryacrv"/></g>`,
		"fallback": "iconoven:blood-drop-type",
	});
}

export default Component;
