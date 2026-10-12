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
		"content": `<style>.edpoc-bxl {
  width: 8.5px;
  height: 8.5px;
  x: 7.75px;
  y: 9.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itcqt-byd {
  width: 14.5px;
  height: 7px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.nkhp61bbn {
  d: path("M10 13h4");
}

.o5w6aob5g {
  width: 5.5px;
  height: 3px;
  x: 9.25px;
  y: 18.25px;
  rx: 0.75px;
}

.pp6yy5dti {
  d: path("M7.75 6.25h8.5");
}
</style><g class="hntgybcog"><rect class="itcqt-byd"/><path class="pp6yy5dti"/><rect class="edpoc-bxl"/><path class="nkhp61bbn"/><rect class="o5w6aob5g"/></g>`,
		"fallback": "iconoven:flash-speedlight",
	});
}

export default Component;
