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
		"content": `<style>.gu0v4mnfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5H8V15h6V9.5h6.5M3.5 12L12 3.5m-4.25 0H12v4.25");
}
</style><path class="gu0v4mnfg"/>`,
		"fallback": "uix-sharp:escalate",
	});
}

export default Component;
