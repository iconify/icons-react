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
		"content": `<style>.yyriwg-_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5H12v5H2.5Zm9.5-1l4-2v11l-4-2Zm6.5.5L21 7.5M18.5 12h3m-3 3l2.5 1.5");
}
</style><path class="yyriwg-_i"/>`,
		"fallback": "uix-sharp:emergency-flashlight",
	});
}

export default Component;
