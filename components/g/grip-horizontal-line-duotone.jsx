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
		"content": `<style>.f3sty6bdo {
  cx: 19px;
  cy: 8.488px;
  r: 0.75px;
}

.hzbwlrnku {
  cx: 5px;
  cy: 8.504px;
  r: 0.75px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lekigjbvy {
  cx: 19px;
  cy: 15.496px;
  r: 0.75px;
}

.mfdgc7b0x {
  cx: 12px;
  cy: 15.512px;
  r: 0.75px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zjx9kz-ib {
  cx: 12px;
  cy: 8.504px;
  r: 0.75px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zo874nbdq {
  cx: 5px;
  cy: 15.512px;
  r: 0.75px;
}
</style><g class="ipq1z-bjh"><circle class="zo874nbdq"/><circle class="mfdgc7b0x"/><circle class="lekigjbvy"/><circle class="hzbwlrnku"/><circle class="zjx9kz-ib"/><circle class="f3sty6bdo"/></g>`,
		"fallback": "solar:grip-horizontal-line-duotone",
	});
}

export default Component;
