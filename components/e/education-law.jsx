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
		"content": `<style>.eptwmnbzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5c-3-2-6.5-2.5-9.5-2v-7c3-.5 6.5 0 9.5 2c3-2 6.5-2.5 9.5-2v7c-3-.5-6.5 0-9.5 2Zm0-7v7m0-18l8 3l-8 3l-8-3Zm5.5 4V10");
}
</style><path class="eptwmnbzd"/>`,
		"fallback": "uix-sharp:education-law",
	});
}

export default Component;
