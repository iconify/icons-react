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
		"content": `<style>.b4-xgxb0m {
  width: 17.5px;
  height: 9.75px;
  x: 3.25px;
  y: 11.5px;
  rx: 2px;
}

.ceut2u0ve {
  d: path("M12 9.25v-6.5M8.75 6L12 2.75L15.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5aq1abnn {
  d: path("M3.25 16.38h17.5M7 13.94h3m-3 4.87h3");
}
</style><g class="hntgybcog"><path class="ceut2u0ve"/><rect class="b4-xgxb0m"/><path class="z5aq1abnn"/></g>`,
		"fallback": "iconoven:deploy-arrow",
	});
}

export default Component;
