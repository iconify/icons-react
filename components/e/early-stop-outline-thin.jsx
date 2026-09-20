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
		"content": `<style>.gh1l41bbm {
  d: path("m3 5 6 6h4l3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="hntgybcog"><path class="gh1l41bbm"/><path class="t3rq50btb"/></g>`,
		"fallback": "iconmind:early-stop-outline-thin",
	});
}

export default Component;
