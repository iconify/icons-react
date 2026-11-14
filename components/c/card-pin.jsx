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
		"content": `<style>.aq_r3vbkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.9 19H2.5V5h19v7.8m-19-3.3h19m-19 0h19M6 15h2.5m9.5 0v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="aq_r3vbkv"/>`,
		"fallback": "uix-sharp:card-pin",
	});
}

export default Component;
