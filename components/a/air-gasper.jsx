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
		"content": `<style>.ram8qib6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V5m-6 6a6 6 0 0 1 12 0Zm2 2.75q-1 2 0 4t0 3.75m4-7.75q-1 2 0 4t0 3.75m4-7.75q-1 2 0 4t0 3.75");
}
</style><path class="ram8qib6l"/>`,
		"fallback": "uix-sharp:air-gasper",
	});
}

export default Component;
