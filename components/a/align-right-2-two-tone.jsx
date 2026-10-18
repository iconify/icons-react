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
		"content": `<style>.n_vqhrbta {
  stroke-opacity: 0.4;
  d: path("M16 4.5L3 4.5M16 9.5L3 9.5M16 14.5L6 14.5M16 19.5L10 19.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.psk23pi3k {
  d: path("M21 3L21 21");
}
</style><g class="nrj6p8qat"><path class="n_vqhrbta"/><path class="psk23pi3k"/></g>`,
		"fallback": "keyline-icons:align-right-2-two-tone",
	});
}

export default Component;
