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
		"content": `<style>.fz-vpndbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7v11.25a3.25 3.25 0 0 0 6.5 0V7M4 2.5h9.5V7H4Zm1.5 10H12m6 2.5v6m-3-3h6");
}
</style><path class="fz-vpndbi"/>`,
		"fallback": "uix-sharp:antidote",
	});
}

export default Component;
