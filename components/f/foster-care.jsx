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
		"content": `<style>.bunxbxbwr {
  d: path("m12 11.25l-2-2a1.25 1.25 0 0 1 2-1.5a1.25 1.25 0 0 1 2 1.5Z");
}

.fkwa6kpjs {
  cx: 16.75px;
  cy: 13.25px;
  r: 1.5px;
}

.g58x3bb3r {
  d: path("M14.25 21.25v-1.5a2.5 2.5 0 0 1 5 0v1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m68zukbnw {
  d: path("M2.75 10.5L12 3l9.25 7.5");
}

.u2-0pubsi {
  d: path("M4.25 21.25V19.5a3.5 3.5 0 0 1 7 0v1.75Z");
}

.um0cgue3w {
  cx: 7.75px;
  cy: 11.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="m68zukbnw"/><path class="bunxbxbwr"/><circle class="um0cgue3w"/><path class="u2-0pubsi"/><circle class="fkwa6kpjs"/><path class="g58x3bb3r"/></g>`,
		"fallback": "iconoven:foster-care",
	});
}

export default Component;
