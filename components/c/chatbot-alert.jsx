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
		"content": `<style>.cnl22i_pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 17H4V5.5h15v6.4m-7.5-9.4v3m-3 5.5h.01m5.99 0h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="cnl22i_pv"/>`,
		"fallback": "uix-sharp:chatbot-alert",
	});
}

export default Component;
