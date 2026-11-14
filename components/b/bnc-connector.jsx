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
		"content": `<style>.m_-ttmbuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h4m0-3.5h7v7h-7Zm7-2h5v11h-5Zm5 5.5h3M16 3.75h.01");
}
</style><path class="m_-ttmbuj"/>`,
		"fallback": "uix-sharp:bnc-connector",
	});
}

export default Component;
