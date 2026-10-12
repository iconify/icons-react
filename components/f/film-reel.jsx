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
		"content": `<style>.e84hrrbda {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 19.25l2.25 2h8");
}

.fvsu8ubvu {
  cx: 15.25px;
  cy: 11px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icc1v1yqn {
  cx: 11px;
  cy: 11px;
  r: 8.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6gcy4nyz {
  cx: 6.75px;
  cy: 11px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p01uf6b6n {
  cx: 11px;
  cy: 15.25px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xttzr879b {
  cx: 11px;
  cy: 6.75px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ydc96fu9t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 11h.01");
}
</style><g class="y9tr6bcfx"><circle class="icc1v1yqn"/><circle class="xttzr879b"/><circle class="fvsu8ubvu"/><circle class="p01uf6b6n"/><circle class="l6gcy4nyz"/><path class="ydc96fu9t"/><path class="e84hrrbda"/></g>`,
		"fallback": "iconoven:film-reel",
	});
}

export default Component;
