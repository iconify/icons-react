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

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.t9eziwbjg {
  d: path("m14 7 -5 5h4l-3 3");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="t9eziwbjg"/></g>`,
		"fallback": "iconmind:fast-thinking-outline-thin",
	});
}

export default Component;
