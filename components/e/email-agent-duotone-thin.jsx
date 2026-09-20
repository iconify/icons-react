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
		"content": `<style>.cf6epupol {
  d: path("M7.5 2.83a3.5 3.5 0 1 1 -2.96 0");
}

.h7689ssil {
  fill: currentColor;
  d: path("M10 13a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfe6vjb3x {
  d: path("m12 12 3.5 3.5L19 12");
}

.rmp_51owx {
  d: path("M10 13a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="h7689ssil"/><path class="cf6epupol"/><path class="rmp_51owx"/><path class="pfe6vjb3x"/></g>`,
		"fallback": "iconmind:email-agent-duotone-thin",
	});
}

export default Component;
