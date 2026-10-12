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
		"content": `<style>.a49e-g2kw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 20.5v-17q0-.75.75-.75h14q.75 0 .75.75v17q0 .75-.75.75h-1.25q-.75 0-.75-.75V6.25q0-.75-.75-.75h-8.5Q7 5.5 7 6.25V20.5q0 .75-.75.75H5q-.75 0-.75-.75");
}

.iffk8vb0o {
  width: 5.5px;
  height: 13.5px;
  x: 9.25px;
  y: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.t1yeywbfb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 14.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="a49e-g2kw"/><rect class="iffk8vb0o"/><path class="t1yeywbfb"/></g>`,
		"fallback": "iconoven:door-frame",
	});
}

export default Component;
