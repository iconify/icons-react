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
		"content": `<style>.m_t_b-b_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h6v17.5h-6Zm13 0h6v17.5h-6Zm-7 7.5h4.25M18.5 8h.01");
}
</style><path class="m_t_b-b_c"/>`,
		"fallback": "uix-sharp:fare-gate",
	});
}

export default Component;
