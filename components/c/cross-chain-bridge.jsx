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
		"content": `<style>.cpyr62b6m {
  d: path("m14.5 14l3.5 2l3.5-2M18 16v4M6 9c0-5.5 12-5.5 12 0");
}

.fmulydbsj {
  d: path("m6.744 12.425l2 1.143A1.5 1.5 0 0 1 9.5 14.87v2.26a1.5 1.5 0 0 1-.756 1.302l-2 1.143a1.5 1.5 0 0 1-1.488 0l-2-1.143A1.5 1.5 0 0 1 2.5 17.13v-2.26a1.5 1.5 0 0 1 .756-1.302l2-1.143a1.5 1.5 0 0 1 1.488 0");
}

.fvc6brbzk {
  d: path("M2.5 14L6 16l3.5-2M6 16v4m12.744-7.575l2 1.143a1.5 1.5 0 0 1 .756 1.302v2.26a1.5 1.5 0 0 1-.756 1.302l-2 1.143a1.5 1.5 0 0 1-1.488 0l-2-1.143a1.5 1.5 0 0 1-.756-1.302v-2.26a1.5 1.5 0 0 1 .756-1.302l2-1.143a1.5 1.5 0 0 1 1.488 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd93cabqu {
  d: path("M16.25 7.25L18 9l1.75-1.75");
}
</style><g class="hntgybcog"><path class="fmulydbsj"/><path class="fvc6brbzk"/><path class="cpyr62b6m"/><path class="jd93cabqu"/></g>`,
		"fallback": "uix:cross-chain-bridge",
	});
}

export default Component;
