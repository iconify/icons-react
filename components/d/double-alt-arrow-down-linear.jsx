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
		"content": `<style>.ahhwqlski {
  d: path("M19 7L12 13L5 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zen1fdcpk {
  d: path("M19 11L12 17L5 11");
}
</style><g class="hntgybcog"><path class="zen1fdcpk"/><path class="ahhwqlski"/></g>`,
		"fallback": "solar:double-alt-arrow-down-linear",
	});
}

export default Component;
