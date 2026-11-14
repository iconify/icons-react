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
		"content": `<style>.j-jml2bgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 19H2.5V5h19v7.6m-19-3.1h19m-19 0h19M6 15h3m6.5.5l5 5m0-5l-5 5");
}
</style><path class="j-jml2bgr"/>`,
		"fallback": "uix-sharp:credit-card-x",
	});
}

export default Component;
