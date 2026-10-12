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

.j19le_uky {
  cx: 8px;
  cy: 10.25px;
  r: 2px;
}

.jh8sg_bol {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2px;
}

.sjadambmn {
  d: path("M4.75 18.25a3.25 3.25 0 0 1 6.5 0M14 13.5l1.75 1.75l3.25-3.5");
}
</style><g class="hntgybcog"><rect class="jh8sg_bol"/><circle class="j19le_uky"/><path class="sjadambmn"/></g>`,
		"fallback": "iconoven:identity-verify",
	});
}

export default Component;
