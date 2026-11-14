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
		"content": `<style>.vr_ifmalj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.055 8.288l5.657 5.657m-.707-10.607l-4.95 4.95m7.779-2.122l-7.779 7.779m10.607-4.95l-4.95 4.95m-6.894-1.238l2.475 2.475l-4.95 4.95l-2.475-2.475Z");
}
</style><path class="vr_ifmalj"/>`,
		"fallback": "uix-sharp:hand-fork",
	});
}

export default Component;
