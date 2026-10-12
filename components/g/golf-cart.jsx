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
		"content": `<style>.dxec_j2sl {
  width: 18.5px;
  height: 4.75px;
  x: 2.75px;
  y: 12px;
  rx: 1.5px;
}

.gd1swhspa {
  d: path("M3.25 3.5h17.5M5 3.5V12m13.5-8.5V12M7.75 12V8.25h4m4 3.75L14.5 8.75H13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s2ji9x41d {
  cx: 7px;
  cy: 17px;
  r: 2.5px;
}

.sjhq4_bif {
  cx: 17px;
  cy: 17px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="gd1swhspa"/><rect class="dxec_j2sl"/><circle class="s2ji9x41d"/><circle class="sjhq4_bif"/></g>`,
		"fallback": "iconoven:golf-cart",
	});
}

export default Component;
