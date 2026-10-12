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
		"content": `<style>.c7-odekvh {
  width: 18.5px;
  height: 17.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.hiw3htxoe {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 11.5h.01m7.99 0h.01m3.99 0h.01M6 14.88h.01m3.99 0h.01m3.99 0h.01M10 18.25h.01m7.99 0h.01M9.5 11h1v1h-1Zm8 3.38h1v1h-1Zm-12 3.37h1v1h-1Zm8 0h1v1h-1Z");
}

.rdy9xcy9v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.75v3m8-3v3m-13.25 3h18.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="c7-odekvh"/><path class="rdy9xcy9v"/><path class="hiw3htxoe"/></g>`,
		"fallback": "iconoven:calendar-heatmap",
	});
}

export default Component;
