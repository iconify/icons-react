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
		"content": `<style>.bely7fbqb {
  d: path("M14.25 3.5h-8.5q-1.5 0-1.5 1.5v3.5q0 1.5 1.38 1.5Q7 10 7.15 11.49l.45 4.27q.15 1.49 1.65 1.49h1.5q1.5 0 1.35-1.49l-.45-4.27Q11.5 10 13 10h1.25q1.5 0 1.5-1.5V5q0-1.5-1.5-1.5");
}

.bmrx36biy {
  d: path("M19.25 6.75h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_6f4ebhc {
  width: 10.5px;
  height: 4px;
  x: 4.5px;
  y: 17.25px;
  rx: 1.25px;
}

.tcau_zbxz {
  width: 3.5px;
  height: 4px;
  x: 15.75px;
  y: 4.75px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="bely7fbqb"/><rect class="tcau_zbxz"/><path class="bmrx36biy"/><rect class="i_6f4ebhc"/></g>`,
		"fallback": "iconoven:drill-cordless",
	});
}

export default Component;
