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

.mnvg4hb-l {
  width: 3px;
  height: 11px;
  x: 10px;
  y: 2.75px;
  rx: 1.5px;
}

.uxamq4b5z {
  d: path("M10 4.75H6.5m3.5 2.5H6.5m3.5 2.5H6.5m3.5 2.5H6.5m5 2.25v6.75M16 3c1.5 2.5-1 4.5.5 7s-1 4.5.5 7m2.5-12c1.5 2.5-1 4.5.5 7s-1 4.5.5 7");
}
</style><g class="hntgybcog"><rect class="mnvg4hb-l"/><path class="uxamq4b5z"/></g>`,
		"fallback": "iconoven:comb-hair",
	});
}

export default Component;
