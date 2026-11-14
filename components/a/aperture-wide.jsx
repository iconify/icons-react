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
		"content": `<style>.sp2o_ei2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM18 12l-5.5 9.5m2.5-4.25H4m5 0l-5.5-9.5M6 12l5.5-9.5M9 6.75h11m-5 0l5.5 9.5");
}
</style><path class="sp2o_ei2d"/>`,
		"fallback": "uix-sharp:aperture-wide",
	});
}

export default Component;
