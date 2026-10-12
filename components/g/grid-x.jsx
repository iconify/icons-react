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
		"content": `<style>.cjdr0xbiz {
  width: 6.5px;
  height: 6.5px;
  x: 3.75px;
  y: 13.75px;
  rx: 1.75px;
}

.ds-ud47kp {
  width: 6.5px;
  height: 6.5px;
  x: 3.75px;
  y: 3.75px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ib3t7mb0k {
  width: 6.5px;
  height: 6.5px;
  x: 13.75px;
  y: 13.75px;
  rx: 1.75px;
}

.y5k2n1-gv {
  width: 6.5px;
  height: 6.5px;
  x: 13.75px;
  y: 3.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="ds-ud47kp"/><rect class="y5k2n1-gv"/><rect class="cjdr0xbiz"/><rect class="ib3t7mb0k"/></g>`,
		"fallback": "iconoven:grid-x",
	});
}

export default Component;
