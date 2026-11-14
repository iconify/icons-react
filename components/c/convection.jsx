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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.to2y-gbrq {
  d: path("M14.75 5L17 7.25L19.25 5");
}

.ugsfracak {
  d: path("M12 15c2 1.25 3.25 2 3.25 3.25a3.25 3.25 0 0 1-6.5 0c0-.75.5-1.5 1.25-2c.25.75.75 1.25 1.25 1.5c-.25-1 0-2 .75-2.75m0-2.75a5 5 0 1 1 5-5");
}
</style><g class="hntgybcog"><path class="ugsfracak"/><path class="to2y-gbrq"/></g>`,
		"fallback": "uix:convection",
	});
}

export default Component;
