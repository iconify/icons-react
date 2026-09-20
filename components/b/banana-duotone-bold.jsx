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
		"content": `<style>.g2r3eubpu {
  fill: currentColor;
  d: path("M4 7c0 9 6 14 16 12 -7 -2 -11 -6 -11 -13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ke028acry {
  d: path("M4 7c0 9 6 14 16 12 -7 -2 -11 -6 -11 -13Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="g2r3eubpu"/><path class="ke028acry"/></g>`,
		"fallback": "iconmind:banana-duotone-bold",
	});
}

export default Component;
