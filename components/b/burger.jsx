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
		"content": `<style>.b9e079cmc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 7h.01m4.99 0h.01");
}

.n_bkfzbiq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10a8 6.5 0 0 1 16 0a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m-.25 4.25c1.4 0 1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z0zcgccxi {
  width: 16px;
  height: 4px;
  x: 4px;
  y: 17.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}
</style><g class="y9tr6bcfx"><path class="n_bkfzbiq"/><rect class="z0zcgccxi"/><path class="b9e079cmc"/></g>`,
		"fallback": "iconoven:burger",
	});
}

export default Component;
