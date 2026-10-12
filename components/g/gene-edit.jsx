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

.qox9oxbss {
  cx: 19px;
  cy: 15.75px;
  r: 2px;
}

.vbk_62bzj {
  d: path("M3.5 2.75c0 4.5 8 4.75 8 9.25s-8 4.75-8 9.25m8-18.5c0 4.5-8 4.75-8 9.25s8 4.75 8 9.25M5.75 4.5h3.5m-4 7.5h4.5m-4 7.5h3.5");
}

.yzsokn43l {
  cx: 19px;
  cy: 8.25px;
  r: 2px;
}

.zbstr9saf {
  d: path("m17.5 9.6l-4.25 4.65m4.25.15l-4.25-4.65");
}
</style><g class="hntgybcog"><path class="vbk_62bzj"/><circle class="yzsokn43l"/><circle class="qox9oxbss"/><path class="zbstr9saf"/></g>`,
		"fallback": "iconoven:gene-edit",
	});
}

export default Component;
