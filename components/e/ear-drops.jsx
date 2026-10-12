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
		"content": `<style>.cvl-4dkgp {
  d: path("M16.85 9.75h2.8q.6 0 .33.54l-.96 1.92q-.27.54-.77.54t-.77-.54l-.96-1.92q-.27-.54.33-.54m1.4 4.5c.75 1 1.5 1.75 1.5 2.6a1.5 1.5 0 0 1-3 0c0-.85.75-1.6 1.5-2.6m-14.5 0a5 5 0 0 1 10 0c0 2-1.5 2.75-2.5 4s-1 3-3 3a2.75 2.75 0 0 1-2.5-1.75m1-5.25a2 2 0 0 1 4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_xjguc2p {
  width: 6px;
  height: 7px;
  x: 15.25px;
  y: 2.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="r_xjguc2p"/><path class="cvl-4dkgp"/></g>`,
		"fallback": "iconoven:ear-drops",
	});
}

export default Component;
