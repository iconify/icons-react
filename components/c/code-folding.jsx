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
		"content": `<style>.bz6essber {
  width: 10px;
  height: 4.5px;
  x: 11.25px;
  y: 9.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.g51qkfblh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.5L5.5 6.75L7.75 4.5M5.5 9.25v6.5m5.75-10.5h10m-10 13.5h10");
}

.njimwfb8j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 12h.01m2.74 0h.01M19 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="g51qkfblh"/><rect class="bz6essber"/><path class="njimwfb8j"/></g>`,
		"fallback": "iconoven:code-folding",
	});
}

export default Component;
