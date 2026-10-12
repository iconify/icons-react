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
		"content": `<style>.aen2wn78p {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.ay-4n51cv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 16.25v5m-4 0h8");
}

.k3rn56b2a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 7.5h.01m-.01 4.75h.01");
}

.udg28_ffp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 8h2l1-1.75l1.25 3.5l1-1.75h2m-7.25 5c.75-1.5 1.5-1.5 2 0s1.25 1.5 2 0s1.25-1.5 2 0m4.5-9.25v12.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aen2wn78p"/><path class="udg28_ffp"/><path class="k3rn56b2a"/><path class="ay-4n51cv"/></g>`,
		"fallback": "iconoven:ecg-monitor",
	});
}

export default Component;
