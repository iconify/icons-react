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
		"content": `<style>.dzpym8b4f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.25 19.5h.01m7.99 0h.01");
}

.sj-2z92uf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h1.4A1.5 1.5 0 0 1 5.61 7.9l1.79 7.85M6 9.25h13.5a1 1 0 0 1 .97 1.24l-.95 3.8a2 2 0 0 1-1.94 1.46H7.4Z");
}

.x2cgfaclh {
  width: 6px;
  height: 3.25px;
  x: 10px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="sj-2z92uf"/><path class="dzpym8b4f"/><rect class="x2cgfaclh"/></g>`,
		"fallback": "iconoven:cart-full",
	});
}

export default Component;
