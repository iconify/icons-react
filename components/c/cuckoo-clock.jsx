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
		"content": `<style>.icnxmkbwj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 12.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M9.5 18v1.75m5-1.75v1.25");
}

.lbi90ci2c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 20.75h.01m4.99-.5h.01");
}

.vol85q2ce {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.6 3.45l6.8 5.1q.6.45-.15.45h-.5Q18 9 18 9.75v7.5q0 .75-.75.75H6.75Q6 18 6 17.25v-7.5Q6 9 5.25 9h-.5Q4 9 4.6 8.55l6.8-5.1q.6-.45 1.2 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="vol85q2ce"/><path class="icnxmkbwj"/><path class="lbi90ci2c"/></g>`,
		"fallback": "iconoven:cuckoo-clock",
	});
}

export default Component;
