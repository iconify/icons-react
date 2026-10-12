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
		"content": `<style>.y--m_4b1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 15.25v-8h3V12m0-3.25V4.5h3V12m0-5V5.5h3V12m0-2.5V8h3v7A6.25 6.25 0 0 1 15 21.25h-2a5.5 5.5 0 0 1-4.1-1.85l-4.3-4.8a1.5 1.5 0 0 1 2.3-1.95l2.35 2.6m-4-12.5l.3 2.2l2.2.3l-2.2.3l-.3 2.2l-.3-2.2l-2.2-.3l2.2-.3z");
}
</style><path class="y--m_4b1n"/>`,
		"fallback": "iconoven:agent-hand-sharp",
	});
}

export default Component;
