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

.l02t2qs1j {
  d: path("M19.5 3.5L21 6l-2.75 1M3 18q8-7 16-4");
}

.nb6fasbvt {
  d: path("M5 10q8-7 16-4");
}

.vypfsppjx {
  d: path("M17.5 11.5L19 14l-2.75 1");
}
</style><g class="hntgybcog"><path class="nb6fasbvt"/><path class="l02t2qs1j"/><path class="vypfsppjx"/></g>`,
		"fallback": "uix:concurrency",
	});
}

export default Component;
