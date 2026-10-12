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

.xwv91sd-e {
  cx: 16.75px;
  cy: 7.25px;
  r: 1.75px;
}

.y3658bbcq {
  d: path("M12 2.75v18.5M2.75 12h18.5M7 10.75v2.5M10.75 17h2.5");
}
</style><g class="hntgybcog"><path class="y3658bbcq"/><circle class="xwv91sd-e"/></g>`,
		"fallback": "iconoven:coordinate-plane",
	});
}

export default Component;
