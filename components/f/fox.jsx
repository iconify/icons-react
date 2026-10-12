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
		"content": `<style>.ti4zebc4j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13c1.75 0 3.5.75 5 2.25c1.5-1.5 3.25-2.25 5-2.25c-1.25 2.25-3 4.15-5 5.4c-2-1.25-3.75-3.15-5-5.4");
}

.v0rzdcctt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.25 3.75l5.5 3.5h6.5l5.5-3.5V9.5c0 3.5-4.75 8.75-8.75 11c-4-2.25-8.75-7.5-8.75-11Z");
}

.vt-vgvh_a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 10.25h.01m6.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="v0rzdcctt"/><path class="ti4zebc4j"/><path class="vt-vgvh_a"/></g>`,
		"fallback": "iconoven:fox",
	});
}

export default Component;
