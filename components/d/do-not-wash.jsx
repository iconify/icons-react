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

.uc7kjcccg {
  d: path("M3.25 11q1.853-.824 3.536-.291m7.664-.205q1.025.04 2.05.496q2 1 4.25 0M3.5 3.5l17 17");
}

.xzmxsx9ng {
  d: path("m2.5 7.5l2.5 12h10.542m4.221-3.664L21.5 7.5");
}
</style><g class="hntgybcog"><path class="xzmxsx9ng"/><path class="uc7kjcccg"/></g>`,
		"fallback": "uix:do-not-wash",
	});
}

export default Component;
