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
		"content": `<style>.lnz9ryb0q {
  d: path("M15.25 9H2.5v7h19v-4L20 10h-2v6M2.75 9V7.25l1.5-2h2l1.5 2V9m2.5 0V7.25l1.5-2h2l1.5 2V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfvsmabwb {
  d: path("M4.25 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm12.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="lnz9ryb0q"/><path class="zfvsmabwb"/></g>`,
		"fallback": "uix-sharp:car-carrier",
	});
}

export default Component;
