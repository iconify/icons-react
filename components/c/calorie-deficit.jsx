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
		"content": `<style>.m_1pkp_ec {
  d: path("M8.5 19.75c-3 0-5.25-2-5.25-4.75c0-3 2.75-4.5 3.25-8c1.25 1 2 2.5 2 4c1-.5 2-1.5 2-2.5c2 1.5 3.25 3.75 3.25 6.5s-2.25 4.75-5.25 4.75Z");
}

.pjki9tbvr {
  d: path("M8.5 19.75c-1 0-2-.75-2-1.75c0-1.5 1.25-2 2-3.5c.75 1.5 2 2 2 3.5c0 1-1 1.75-2 1.75ZM18.5 5v14M16 16.5l2.5 2.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m_1pkp_ec"/><path class="pjki9tbvr"/></g>`,
		"fallback": "uix-sharp:calorie-deficit",
	});
}

export default Component;
