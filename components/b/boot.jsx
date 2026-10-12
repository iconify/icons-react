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

.nhcbi2z5x {
  d: path("M4.5 2.75h7.25v9.75l5.15 1.9a4.6 4.6 0 0 1 2.85 3.85H4.5Zm3.75 3.5h3.5m-3.5 3h3.5");
}

.of7t0s90p {
  width: 15.25px;
  height: 3px;
  x: 4.5px;
  y: 18.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="nhcbi2z5x"/><rect class="of7t0s90p"/></g>`,
		"fallback": "iconoven:boot",
	});
}

export default Component;
