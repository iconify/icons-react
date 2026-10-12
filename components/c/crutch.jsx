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
		"content": `<style>.atd3fbcxc {
  d: path("m7.75 5.75l3.5 10.75h1.5l3.5-10.75M12 16.5v2.25M9.46 11h5.08");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q-x9q81yx {
  width: 3px;
  height: 2.5px;
  x: 10.5px;
  y: 18.75px;
  rx: 1px;
}

.u4yq7323d {
  width: 11.5px;
  height: 3px;
  x: 6.25px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="u4yq7323d"/><path class="atd3fbcxc"/><rect class="q-x9q81yx"/></g>`,
		"fallback": "iconoven:crutch",
	});
}

export default Component;
