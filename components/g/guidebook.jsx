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
		"content": `<style>.swn59-b4n {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.w--yti86f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 10.5h.01");
}

.wwki5gbdl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75v18.5m6.75-5.5c-2-1.85-3.25-3.6-3.25-5.25a3.25 3.25 0 0 1 6.5 0c0 1.65-1.25 3.4-3.25 5.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="swn59-b4n"/><path class="wwki5gbdl"/><path class="w--yti86f"/></g>`,
		"fallback": "iconoven:guidebook",
	});
}

export default Component;
