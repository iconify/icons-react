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
		"content": `<style>.v_uw6pbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.75v16.5m15.5-16.5v16.5M8.5 8.5l7 7m0-7l-7 7");
}
</style><path class="v_uw6pbhg"/>`,
		"fallback": "iconoven:absolute-value-sharp",
	});
}

export default Component;
