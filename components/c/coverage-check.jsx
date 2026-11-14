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
		"content": `<style>.jla2cib_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-5m4.5 5V10M12 21v-1.8m0-2.4V3.5M14.75 18l2 2L21 15.75");
}
</style><path class="jla2cib_s"/>`,
		"fallback": "uix-sharp:coverage-check",
	});
}

export default Component;
