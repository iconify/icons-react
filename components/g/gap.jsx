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
		"content": `<style>.vt54iobpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h4v16h-4Zm15 0h4v16h-4Zm-8.25 8h5.5m-3.5-2l-2 2l2 2m1.5-4l2 2l-2 2");
}
</style><path class="vt54iobpd"/>`,
		"fallback": "uix-sharp:gap",
	});
}

export default Component;
