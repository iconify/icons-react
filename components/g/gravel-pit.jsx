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

.mc_9ckbzp {
  d: path("M9.75 13.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.v4djlqjdd {
  d: path("M7.5 17.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.vc1l5yppd {
  d: path("M2.5 6h2l3 13.5h9l3-13.5h2");
}
</style><g class="hntgybcog"><path class="vc1l5yppd"/><path class="v4djlqjdd"/><path class="mc_9ckbzp"/></g>`,
		"fallback": "uix:gravel-pit",
	});
}

export default Component;
