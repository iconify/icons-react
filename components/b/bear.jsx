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
		"content": `<style>.jpkl0fpri {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.5h.01M9 11.25h.01m5.99 0h.01");
}

.u8oe9pbwv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 16.25a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0");
}

.w7eo9qbqr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.82 9a2.75 2.75 0 1 1 2.65-2.37a7.5 7.5 0 0 1 7.06 0A2.75 2.75 0 1 1 18.18 9A7.5 7.5 0 1 1 5.82 9");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w7eo9qbqr"/><path class="u8oe9pbwv"/><path class="jpkl0fpri"/></g>`,
		"fallback": "iconoven:bear",
	});
}

export default Component;
