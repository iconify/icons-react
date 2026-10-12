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
		"content": `<style>.ee3jpdboo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 15.75q3.75 2.5 7.5 0M16 16.8l-.25 1.3M19 16.8l.25 1.3");
}

.ixj3l_92x {
  cx: 6.5px;
  cy: 9.5px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnct0zbjs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 7.9h.01m-1.4 2.4h.01m2.77 0h.01");
}

.l5iu5-vyy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 7.9h.01m-1.4 2.4h.01m2.77 0h.01");
}

.md72zzbry {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.75q3.75 2.5 7.5 0M5 16.8l-.25 1.3M8 16.8l.25 1.3");
}

.mm4619bpm {
  cx: 17.5px;
  cy: 9.5px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="ixj3l_92x"/><path class="l5iu5-vyy"/><path class="md72zzbry"/><circle class="mm4619bpm"/><path class="jnct0zbjs"/><path class="ee3jpdboo"/></g>`,
		"fallback": "iconoven:cucumber-eyes",
	});
}

export default Component;
