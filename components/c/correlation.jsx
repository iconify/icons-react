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
		"content": `<style>.dhm6-cbyv {
  width: 4.5px;
  height: 4.5px;
  x: 9.75px;
  y: 16.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sn0xwt2-d {
  width: 4.5px;
  height: 4.5px;
  x: 2.75px;
  y: 9.75px;
  rx: 1px;
}

.t6kpym19f {
  width: 4.5px;
  height: 4.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1px;
}

.vf5fdmjjw {
  width: 4.5px;
  height: 4.5px;
  x: 16.75px;
  y: 16.75px;
  rx: 1px;
}

.vjq-rp2mb {
  width: 4.5px;
  height: 4.5px;
  x: 9.75px;
  y: 9.75px;
  rx: 1px;
}

.wkpv5vbxf {
  width: 4.5px;
  height: 4.5px;
  x: 2.75px;
  y: 16.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="t6kpym19f"/><rect class="sn0xwt2-d"/><rect class="vjq-rp2mb"/><rect class="wkpv5vbxf"/><rect class="dhm6-cbyv"/><rect class="vf5fdmjjw"/></g>`,
		"fallback": "iconoven:correlation",
	});
}

export default Component;
