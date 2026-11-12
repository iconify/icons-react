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
		"content": `<style>.b0x94kb-u {
  cx: 5.008px;
  cy: 19px;
  r: 0.75px;
}

.c0odglb-w {
  cx: 19.008px;
  cy: 12px;
  r: 0.75px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.msuzhccpk {
  cx: 12.016px;
  cy: 12px;
  r: 0.75px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ne3znqnan {
  cx: 4.992px;
  cy: 5px;
  r: 0.75px;
}

.ofiabdbkw {
  cx: 19.008px;
  cy: 19px;
  r: 0.75px;
}

.rf2iq2_-s {
  cx: 12px;
  cy: 5px;
  r: 0.75px;
}

.ucr1abtlg {
  cx: 12.016px;
  cy: 19px;
  r: 0.75px;
}

.vy0kz1bbg {
  cx: 18.992px;
  cy: 5px;
  r: 0.75px;
}

.wply1zb2x {
  cx: 5.008px;
  cy: 12px;
  r: 0.75px;
}
</style><g class="ipq1z-bjh"><circle class="ucr1abtlg"/><circle class="msuzhccpk"/><circle class="rf2iq2_-s"/><circle class="b0x94kb-u"/><circle class="wply1zb2x"/><circle class="ne3znqnan"/><circle class="ofiabdbkw"/><circle class="c0odglb-w"/><circle class="vy0kz1bbg"/></g>`,
		"fallback": "solar:grip-line-duotone",
	});
}

export default Component;
