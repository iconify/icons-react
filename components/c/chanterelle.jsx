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
		"content": `<style>.sw4_ggdcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8q1-3.5 4-2.25q2-2.75 5-1q3-2 5.5 0Q20.5 4 21.5 6.5c-3 2-5.75 3.5-6.75 7c-.5 2 0 4.5.25 6a1.75 1.75 0 0 1-1.75 2H11A1.5 1.5 0 0 1 9.5 20c.25-2.5.25-4.5-.25-6.25c-1-3-3.75-4.5-6.75-5.75Zm9.5.25V12");
}
</style><path class="sw4_ggdcf"/>`,
		"fallback": "uix-sharp:chanterelle",
	});
}

export default Component;
