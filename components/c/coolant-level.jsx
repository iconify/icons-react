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
		"content": `<style>.h18ufpzwr {
  width: 6px;
  height: 3px;
  x: 9px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igiz4vbdc {
  d: path("M7.5 14.5c1.5-1 3 1 4.5 0s3 1 4.5 0V18a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 7.5 18Z");
}

.ltdwog57l {
  width: 15px;
  height: 15.5px;
  x: 4.5px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="h18ufpzwr"/><rect class="ltdwog57l"/><path class="igiz4vbdc"/></g>`,
		"fallback": "iconoven:coolant-level",
	});
}

export default Component;
