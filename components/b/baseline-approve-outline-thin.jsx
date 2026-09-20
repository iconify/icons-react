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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.ns_05qbai {
  d: path("m9 11 2 2 4 -4");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="hntgybcog"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="ns_05qbai"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:baseline-approve-outline-thin",
	});
}

export default Component;
