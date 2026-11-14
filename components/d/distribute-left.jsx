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
		"content": `<style>.x5j6ynb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 5za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m9.688 3h1.875a2.19 2.19 0 0 1 2.187 2.188v3.625A2.19 2.19 0 0 1 19.313 16h-1.875a2.19 2.19 0 0 1-2.188-2.187v-3.625A2.19 2.19 0 0 1 17.438 8M3 2.5v19m9.5-19v19");
}
</style><path class="x5j6ynb0c"/>`,
		"fallback": "uix:distribute-left",
	});
}

export default Component;
