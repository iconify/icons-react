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
		"content": `<style>.bwzrtebyl {
  width: 6px;
  height: 3.75px;
  x: 9px;
  y: 4.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8gfb8bne {
  width: 10.5px;
  height: 8.5px;
  x: 6.75px;
  y: 12.75px;
  rx: 1.75px;
}

.sidhh-bgj {
  d: path("M10.75 12.75v2.75h2.5v-2.75");
}

.vimv9nbtw {
  d: path("m10.25 8.5l-1 3m4.5-3l1 3");
}

.z2g7h0bqt {
  d: path("M2.75 3.25h5.5m7.5 0h5.5m-15.75 0V6.5H9m9.5-3.25V6.5H15");
}
</style><g class="hntgybcog"><path class="z2g7h0bqt"/><rect class="bwzrtebyl"/><path class="vimv9nbtw"/><rect class="r8gfb8bne"/><path class="sidhh-bgj"/></g>`,
		"fallback": "iconoven:delivery-drone",
	});
}

export default Component;
