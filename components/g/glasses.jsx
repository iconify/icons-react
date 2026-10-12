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

.tqx2_obsp {
  d: path("M10.25 13.75c1.1-.75 2.4-.75 3.5 0M3 13.25L5 6.5h1.5M21 13.25L19 6.5h-1.5");
}

.usm9rcbjq {
  cx: 17.5px;
  cy: 14.5px;
  r: 3.75px;
}

.ysextzbnj {
  cx: 6.5px;
  cy: 14.5px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="ysextzbnj"/><circle class="usm9rcbjq"/><path class="tqx2_obsp"/></g>`,
		"fallback": "iconoven:glasses",
	});
}

export default Component;
