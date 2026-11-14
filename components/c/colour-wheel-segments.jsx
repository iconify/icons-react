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

.l25_b03fs {
  fill: currentColor;
  d: path("M12 12V2.5a9.5 9.5 0 0 1 8.25 4.75Z");
}

.q20-hihnu {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5v19M3.75 7.25l16.5 9.5m0-9.5l-16.5 9.5");
}
</style><g class="hntgybcog"><path class="q20-hihnu"/><path class="l25_b03fs"/></g>`,
		"fallback": "uix:colour-wheel-segments",
	});
}

export default Component;
