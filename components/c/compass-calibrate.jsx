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
		"content": `<style>.lcn3zob1g {
  d: path("M12 18.25c-2.5-4-9.5-4-9.5 0s7 4 9.5 0s9.5-4 9.5 0s-7 4-9.5 0");
}

.u7uim1_ux {
  fill: currentColor;
  d: path("M14 5.25L12.75 8L10 9.25l1.25-2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8c03ccxc {
  d: path("M7 7.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="y8c03ccxc"/><path class="u7uim1_ux"/><path class="lcn3zob1g"/></g>`,
		"fallback": "uix-sharp:compass-calibrate",
	});
}

export default Component;
