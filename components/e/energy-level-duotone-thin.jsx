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
		"content": `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.f0eu_912v {
  fill: currentColor;
  d: path("M7 4h10v17H7Z");
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

.nzfvycb-k {
  d: path("M7 4h10v17H7Z");
}

.r182r524c {
  d: path("M7 9h10");
}
</style><g class="hntgybcog"><path class="f0eu_912v"/><path class="nzfvycb-k"/><path class="r182r524c"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:energy-level-duotone-thin",
	});
}

export default Component;
