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
		"content": `<style>.znc80pbnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 18.5H2.5v-13h19v6.8m-19-2.8h19M6 9.5h5m-5 5h3.5m5.25 3.5l2 2L21 15.75");
}
</style><path class="znc80pbnx"/>`,
		"fallback": "uix-sharp:cheque-cleared",
	});
}

export default Component;
