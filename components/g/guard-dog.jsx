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
		"content": `<style>.fdgleknxc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 10h.01");
}

.fec6d0rij {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18.25h7.75");
}

.w54uzybrx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25V14.5c-1.5-1.25-2.25-3-2.25-5l.75-6l3.25 3h3.5c1.75 0 3 .75 4 1.75l1.5 1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a2 2 0 0 1-2 2H15.5l-1.25 1.5v5.5Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w54uzybrx"/><path class="fdgleknxc"/><path class="fec6d0rij"/></g>`,
		"fallback": "iconoven:guard-dog",
	});
}

export default Component;
