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
		"content": `<style>.bskc5i60x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.611 0 1.202.047 1.765.136M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM18 21.5c-2-2-3.25-3.75-3.25-5.25a3.25 3.25 0 0 1 6.5 0c0 1.5-1.25 3.25-3.25 5.25Z");
}
</style><path class="bskc5i60x"/>`,
		"fallback": "uix-sharp:agent-find",
	});
}

export default Component;
