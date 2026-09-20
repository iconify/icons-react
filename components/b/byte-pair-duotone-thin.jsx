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

.p-6zwabto {
  d: path("M6 14v3h12v-3");
}

.p0lbyib3y {
  fill: currentColor;
  d: path("M15 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q2fp4ccin {
  d: path("M15 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vfo57uyzf {
  d: path("M3 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.x47uatb1d {
  fill: currentColor;
  d: path("M3 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="x47uatb1d"/><path class="p0lbyib3y"/><path class="vfo57uyzf"/><path class="q2fp4ccin"/><path class="p-6zwabto"/></g>`,
		"fallback": "iconmind:byte-pair-duotone-thin",
	});
}

export default Component;
