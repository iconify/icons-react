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
		"content": `<style>.xk3lpx2tn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6.5l-5 5.5l5 5.5m9-11l5 5.5l-5 5.5m-3-13l-3 15");
}
</style><path class="xk3lpx2tn"/>`,
		"fallback": "uix-sharp:code-xml",
	});
}

export default Component;
