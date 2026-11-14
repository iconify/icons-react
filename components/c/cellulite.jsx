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
		"content": `<style>.vgvbejb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5c-1.5 5.5-1 12 2.5 19m9.5-19c0 6.5-1.5 12.5-2.5 19M10 8.5h.01M13.5 11h.01m-3.01 3.5h.01");
}
</style><path class="vgvbejb2j"/>`,
		"fallback": "uix-sharp:cellulite",
	});
}

export default Component;
