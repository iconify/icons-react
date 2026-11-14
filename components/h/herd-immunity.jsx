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
		"content": `<style>.d5384e0bg {
  d: path("M5 15.75c.25-1.25 1-2 2-2c.75 0 1.5.35 2 .75m10 1.25c-.25-1.25-1-2-2-2c-.75 0-1.5.35-2 .75");
}

.d77-9rb8n {
  d: path("M10 7.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.75 18c0-2.75 1.75-4.75 4.25-4.75s4.25 2 4.25 4.75M5 10a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 5 10m10.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl8jcjbbf {
  d: path("M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0");
}
</style><g class="hntgybcog"><path class="jl8jcjbbf"/><path class="d77-9rb8n"/><path class="d5384e0bg"/></g>`,
		"fallback": "uix:herd-immunity",
	});
}

export default Component;
