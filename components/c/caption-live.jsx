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
		"content": `<style>.drlhfzbvx {
  d: path("M6.25 10.25h8.5m-8.5 3.5h4m2 0h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.mc5s_la1h {
  width: 15.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="mc5s_la1h"/><path class="drlhfzbvx"/><circle class="jo45v1frk"/></g>`,
		"fallback": "iconoven:caption-live",
	});
}

export default Component;
