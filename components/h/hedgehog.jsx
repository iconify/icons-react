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
		"content": `<style>.d9-uy6bhr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.25 16.25l-1.46-3.08l3.69-.14l-1.31-3.42l3.31 1.6l.44-3.65l2.2 2.94l2.08-3.04l.59 3.63l3.25-1.73l-1.14 3.51c1.1-1.12 2.85-1.12 3.85.38l1 2.25c-1 .75-1.75.75-3 .75Z");
}

.dvw6-ubkd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16.25V19m7-2.75V19");
}

.th16b8bro {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 14h.01m2.49 1.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d9-uy6bhr"/><path class="th16b8bro"/><path class="dvw6-ubkd"/></g>`,
		"fallback": "iconoven:hedgehog",
	});
}

export default Component;
