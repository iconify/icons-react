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
		"content": `<style>.ik-nc1uyl {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Zm2 11.25h13m-10 0V18m7-4.25V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zzebw2bqv {
  d: path("M6.25 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM11.5 11h6");
}
</style><g class="ulnmmdpxh"><path class="ik-nc1uyl"/><path class="zzebw2bqv"/></g>`,
		"fallback": "uix-sharp:emergency-stretcher-sign",
	});
}

export default Component;
