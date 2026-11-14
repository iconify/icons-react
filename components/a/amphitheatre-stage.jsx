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
		"content": `<style>.b_uynac9f {
  d: path("M5 13.5a7 5.5 0 0 1 14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m47-sobua {
  d: path("M7.75 13.5a4.25 2.75 0 0 1 8.5 0");
}

.mv3evob6m {
  d: path("M2.5 13.5a9.5 8.5 0 0 1 19 0M8 16.25h8a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="m47-sobua"/><path class="b_uynac9f"/><path class="mv3evob6m"/></g>`,
		"fallback": "uix:amphitheatre-stage",
	});
}

export default Component;
