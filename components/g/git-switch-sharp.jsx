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
		"content": `<style>.a_x9lq_pv {
  d: path("M9 17.75h8.25v-8.5m-2.25 2L17.25 9l2.25 2.25");
}

.euy-r2rrr {
  cx: 17.25px;
  cy: 5.75px;
  r: 2.25px;
}

.kahzru8yh {
  cx: 6.75px;
  cy: 17.75px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="kahzru8yh"/><circle class="euy-r2rrr"/><path class="a_x9lq_pv"/></g>`,
		"fallback": "iconoven:git-switch-sharp",
	});
}

export default Component;
