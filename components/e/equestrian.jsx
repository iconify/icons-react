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
		"content": `<style>.i2u1jv3io {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.25 2.75l2.25 2.5c3 1.75 5 5.75 5 10.25v5.75H11l.25-6c-.75-.25-1.75.25-3 1l-2.25 1c-1.25.5-2.75-.5-2.5-2l.25-1.75c.25-1 .75-1.75 1.5-2.5L11 5.25Z");
}

.x8232_bgk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i2u1jv3io"/><path class="x8232_bgk"/></g>`,
		"fallback": "iconoven:equestrian",
	});
}

export default Component;
