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
		"content": `<style>.b1_jsmbhw {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe3kkrg5a {
  cx: 16.5px;
  cy: 11.5px;
  r: 2.25px;
}

.xpec6eu_k {
  d: path("M5.75 16.75v2m12.5-2v2");
}

.z-17y3bzc {
  d: path("M6.25 9.75h5m-5 3.5h3");
}
</style><g class="hntgybcog"><rect class="b1_jsmbhw"/><path class="z-17y3bzc"/><circle class="xe3kkrg5a"/><path class="xpec6eu_k"/></g>`,
		"fallback": "iconoven:av-receiver",
	});
}

export default Component;
