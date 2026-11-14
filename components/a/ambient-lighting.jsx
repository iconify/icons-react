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
		"content": `<style>.mwevkibxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V11l6.5-7.5H19a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2Zm3-3h12m-10-3l-1.25-2.75M12 14.5v-3.25m4 3.25l1.25-2.75");
}
</style><path class="mwevkibxn"/>`,
		"fallback": "uix-sharp:ambient-lighting",
	});
}

export default Component;
