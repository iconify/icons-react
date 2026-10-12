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
		"content": `<style>.ct2xvrblr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.85 6.26a2.45 2.45 0 1 1 1.45 4.48a2.45 2.45 0 1 1-3.8 2.76a2.45 2.45 0 1 1-3.8-2.76a2.45 2.45 0 1 1 1.45-4.48a2.45 2.45 0 1 1 4.7 0");
}

.ifu0k76qy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9.5 16v5.25");
}

.p5q56jq7c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 4.75h.01m1.49 5.5h.01M16.5 14.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ct2xvrblr"/><path class="ifu0k76qy"/><path class="p5q56jq7c"/></g>`,
		"fallback": "iconoven:allergy",
	});
}

export default Component;
