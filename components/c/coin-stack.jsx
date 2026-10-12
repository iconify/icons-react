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

.hymgq-ofz {
  d: path("M2.75 10h8.5m-8.5 3.75h8.5m-8.5 3.75h8.5");
}

.l61oyf3lf {
  width: 8.5px;
  height: 15px;
  x: 2.75px;
  y: 6.25px;
  rx: 2px;
}

.smvttv9po {
  d: path("M13.75 17.5h7.5");
}

.uvb1rhbai {
  width: 7.5px;
  height: 7.5px;
  x: 13.75px;
  y: 13.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="l61oyf3lf"/><path class="hymgq-ofz"/><rect class="uvb1rhbai"/><path class="smvttv9po"/></g>`,
		"fallback": "iconoven:coin-stack",
	});
}

export default Component;
