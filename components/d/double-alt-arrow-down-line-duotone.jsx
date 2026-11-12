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

.nhx5qezis {
  d: path("M19 7L12 13L5 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zen1fdcpk {
  d: path("M19 11L12 17L5 11");
}
</style><g class="hntgybcog"><path class="zen1fdcpk"/><path class="nhx5qezis"/></g>`,
		"fallback": "solar:double-alt-arrow-down-line-duotone",
	});
}

export default Component;
