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
		"content": `<style>.fsgnsjb3f {
  d: path("M8.5 13.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M15.25 12h3.5M17 10.25v3.5");
}

.g7ujt6jkt {
  d: path("M8.75 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu_ytac-v {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m3.75-4.5v9");
}
</style><g class="hntgybcog"><path class="vu_ytac-v"/><path class="g7ujt6jkt"/><path class="fsgnsjb3f"/></g>`,
		"fallback": "uix:age-limit",
	});
}

export default Component;
