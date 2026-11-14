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
		"content": `<style>.xb1p_63qx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14H15V9.5h4.5V16a2.5 2.5 0 0 1-2.5 2.5H2.5Zm14.75-9.5v5m-3.75-5H21");
}
</style><path class="xb1p_63qx"/>`,
		"fallback": "uix-sharp:hydrogen-pipeline",
	});
}

export default Component;
