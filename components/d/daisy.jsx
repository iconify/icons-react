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
		"content": `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pszwkb-my {
  d: path("M9.85 3.97a2.5 2.5 0 0 1 4.3 0a2.5 2.5 0 0 1 3.72 2.16a2.5 2.5 0 0 1 2.16 3.72a2.5 2.5 0 0 1 0 4.3a2.5 2.5 0 0 1-2.16 3.72a2.5 2.5 0 0 1-3.72 2.16a2.5 2.5 0 0 1-4.3 0a2.5 2.5 0 0 1-3.72-2.16a2.5 2.5 0 0 1-2.16-3.72a2.5 2.5 0 0 1 0-4.3a2.5 2.5 0 0 1 2.16-3.72a2.5 2.5 0 0 1 3.72-2.16");
}
</style><g class="hntgybcog"><path class="pszwkb-my"/><circle class="gp0egaclj"/></g>`,
		"fallback": "iconoven:daisy",
	});
}

export default Component;
