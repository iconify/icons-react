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
		"content": `<style>.dihddo_by {
  d: path("M6 18h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqsnn7tzz {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 15.25px;
  rx: 1.25px;
}

.namraacvy {
  d: path("M4.75 15.25v-12m14.5 12v-12m-14.5 3h14.5m-14.5 3h14.5m-14.5 3h14.5");
}
</style><g class="hntgybcog"><path class="namraacvy"/><rect class="lqsnn7tzz"/><path class="dihddo_by"/></g>`,
		"fallback": "iconoven:boxing-ring",
	});
}

export default Component;
