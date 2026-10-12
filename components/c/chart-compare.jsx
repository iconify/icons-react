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
		"content": `<style>.fv0zr5bsz {
  width: 5px;
  height: 15.5px;
  x: 15.25px;
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

.i1ufj5m9w {
  d: path("M10 9h4m-1.5-1.5L14 9l-1.5 1.5M14 14h-4m1.5-1.5L10 14l1.5 1.5");
}

.orbztabrh {
  width: 5px;
  height: 11.5px;
  x: 3.75px;
  y: 8.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="orbztabrh"/><rect class="fv0zr5bsz"/><path class="i1ufj5m9w"/></g>`,
		"fallback": "iconoven:chart-compare",
	});
}

export default Component;
