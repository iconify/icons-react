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
		"content": `<style>.gqho0ybfa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.25V10a6.5 6.5 0 0 1 13 0v11.25ZM12 3.5v17.75");
}

.o6bip-kik {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 14h.01m3.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gqho0ybfa"/><path class="o6bip-kik"/></g>`,
		"fallback": "iconoven:door-arch",
	});
}

export default Component;
