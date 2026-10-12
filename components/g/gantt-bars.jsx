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
		"content": `<style>.a0jajxbxq {
  width: 8px;
  height: 3.5px;
  x: 13.25px;
  y: 16.75px;
  rx: 1.75px;
}

.alp_--1gp {
  width: 9px;
  height: 3.5px;
  x: 9.5px;
  y: 10.25px;
  rx: 1.75px;
}

.cuimd9b-p {
  d: path("M2.75 2.75v18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmv2ism-o {
  width: 8px;
  height: 3.5px;
  x: 5.5px;
  y: 3.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><path class="cuimd9b-p"/><rect class="kmv2ism-o"/><rect class="alp_--1gp"/><rect class="a0jajxbxq"/></g>`,
		"fallback": "iconoven:gantt-bars",
	});
}

export default Component;
