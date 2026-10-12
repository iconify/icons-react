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
		"content": `<style>.gejgkfiqn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8V6A2.25 2.25 0 0 1 6 3.75h2m8 0h2A2.25 2.25 0 0 1 20.25 6v2m0 8v2A2.25 2.25 0 0 1 18 20.25h-2m-8 0H6A2.25 2.25 0 0 1 3.75 18v-2");
}

.o1_h04aru {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5v3.25h-.75m-2 2.5a4.24 4.24 0 0 0 5.5 0");
}

.qx6h-1u4w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9.75h.01m5.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gejgkfiqn"/><path class="qx6h-1u4w"/><path class="o1_h04aru"/></g>`,
		"fallback": "iconoven:face-id-lock",
	});
}

export default Component;
