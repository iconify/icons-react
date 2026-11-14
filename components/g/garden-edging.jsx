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
		"content": `<style>.bq2kvkixd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19v-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19M2.5 19h19M12 11.75V7m0 1.5c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4ZM12 7c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4Z");
}
</style><path class="bq2kvkixd"/>`,
		"fallback": "uix-sharp:garden-edging",
	});
}

export default Component;
