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
		"content": `<style>.crdme_b_t {
  d: path("M5.5 21.25h13M12 18.5v2.75m-1.75-8.75L12 7.75l1.75 4.75m-3-1.5h2.5m-3 4.25h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnljrxsbd {
  width: 8px;
  height: 15.75px;
  x: 8px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="vnljrxsbd"/><path class="crdme_b_t"/></g>`,
		"fallback": "iconoven:accelerator-pedal",
	});
}

export default Component;
