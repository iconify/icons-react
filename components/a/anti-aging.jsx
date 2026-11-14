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
		"content": `<style>.f_bgfmjpy {
  d: path("m19.498 10.688l.002-.188C19.5 6.25 16.25 3 12 3C8 3 5 5.75 5 9.75l-1.5 3.5c-.25.5.1 1 .75 1H5v2.25c0 1.1.9 2 2 2h2v3m6-3.5a3 3 0 1 0 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-mw5tbwd {
  d: path("M19.5 13.5L18 15l1.5 1.5");
}
</style><g class="hntgybcog"><path class="f_bgfmjpy"/><path class="m-mw5tbwd"/></g>`,
		"fallback": "uix:anti-aging",
	});
}

export default Component;
