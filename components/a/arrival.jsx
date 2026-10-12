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
		"content": `<style>.akmah8e_a {
  d: path("M7.5 5.25v-2.5m9 2.5v-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ph_pysbzh {
  d: path("M6 9.5h5.5m-5.5 5h5.5m6.75-3.5l-3.5 3.5m0-3.25v3.25H18");
}

.q0_gb6qzx {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="akmah8e_a"/><rect class="q0_gb6qzx"/><path class="ph_pysbzh"/></g>`,
		"fallback": "iconoven:arrival",
	});
}

export default Component;
