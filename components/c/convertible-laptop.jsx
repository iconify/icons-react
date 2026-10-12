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
		"content": `<style>.g3notubwt {
  width: 12px;
  height: 8px;
  x: 4px;
  y: 5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ob4bwuylg {
  d: path("M3 17h18M19 5.54a4 4 0 0 1 0 6.92m2.24.2l-2.24-.2l.2-2.24");
}
</style><g class="hntgybcog"><rect class="g3notubwt"/><path class="ob4bwuylg"/></g>`,
		"fallback": "iconoven:convertible-laptop",
	});
}

export default Component;
