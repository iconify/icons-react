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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.px1o-0amc {
  d: path("M18.7071 5.2929L5.2929 18.7071");
}

.yp1qmcb2o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 6C22 3.7909 20.2091 2 18 2L6 2C3.7909 2 2 3.7909 2 6L2 18C2 20.2091 3.7909 22 6 22L18 22C20.2091 22 22 20.2091 22 18Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yp1qmcb2o"/><path class="px1o-0amc"/></g>`,
		"fallback": "keyline-icons:ban-square-flip-duotone",
	});
}

export default Component;
