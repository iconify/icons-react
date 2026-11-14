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
		"content": `<style>.o7qzh_bmi {
  d: path("M4 18.5c7.5 0 12-5 12-13.5");
}

.re-k1ub6p {
  d: path("M12.5 8.5L16 5l3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o7qzh_bmi"/><path class="re-k1ub6p"/></g>`,
		"fallback": "uix-sharp:arrow-curve-up",
	});
}

export default Component;
