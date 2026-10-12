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

.iawo-kyky {
  cx: 12px;
  cy: 5.75px;
  r: 1.25px;
}

.n59umob5g {
  d: path("M4.25 12h15.5");
}

.tverd7dxw {
  cx: 12px;
  cy: 18.25px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="n59umob5g"/><circle class="iawo-kyky"/><circle class="tverd7dxw"/></g>`,
		"fallback": "iconoven:divide",
	});
}

export default Component;
