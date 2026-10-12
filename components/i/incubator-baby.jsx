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
		"content": `<style>.iwnceybul {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 15.25h.01");
}

.rw7yt_b9f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 18.5v-5.25a7.75 7.75 0 0 1 15.5 0v5.25m-17 0h18.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="rw7yt_b9f"/><path class="iwnceybul"/></g>`,
		"fallback": "iconoven:incubator-baby",
	});
}

export default Component;
