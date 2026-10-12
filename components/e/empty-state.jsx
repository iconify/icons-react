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
		"content": `<style>.hufrlzpcu {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.pn5jvzxfw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 17h5");
}

.uwqhzccap {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 6.5h.01m3.49 0h.01m3.49 0h.01M15.5 10h.01m-.01 3.5h.01m-3.51 0h.01m-3.51 0h.01M8.5 10h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="hufrlzpcu"/><path class="uwqhzccap"/><path class="pn5jvzxfw"/></g>`,
		"fallback": "iconoven:empty-state",
	});
}

export default Component;
