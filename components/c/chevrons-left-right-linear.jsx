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
		"content": `<style>.bo7nhnbsw {
  d: path("M15 6L21 12L15 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n18lttbuz {
  d: path("M9 6L3 12L9 18");
}
</style><g class="hntgybcog"><path class="bo7nhnbsw"/><path class="n18lttbuz"/></g>`,
		"fallback": "solar:chevrons-left-right-linear",
	});
}

export default Component;
