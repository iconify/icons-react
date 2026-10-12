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
		"content": `<style>.azeq682ld {
  cx: 13.25px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.bzy5_itsi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.75 19h.01");
}

.m_6c0ubwy {
  cx: 5.75px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q05arkkaz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.5V4.75h5l2.5 6.75m5-8v13.25h4m-4-3.5h4");
}

.rsuow_bhd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.25 19h.01");
}

.sox7ktb2r {
  width: 11.5px;
  height: 5.25px;
  x: 2.75px;
  y: 11.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="sox7ktb2r"/><path class="q05arkkaz"/><circle class="m_6c0ubwy"/><path class="bzy5_itsi"/><circle class="azeq682ld"/><path class="rsuow_bhd"/></g>`,
		"fallback": "iconoven:forklift-zone",
	});
}

export default Component;
