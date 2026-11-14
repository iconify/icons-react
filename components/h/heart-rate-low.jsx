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
		"content": `<style>.qey8m_bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h5L9 4l2 11l1.5-5h9M18 14.5v7m-3-3l3 3l3-3");
}
</style><path class="qey8m_bci"/>`,
		"fallback": "uix-sharp:heart-rate-low",
	});
}

export default Component;
