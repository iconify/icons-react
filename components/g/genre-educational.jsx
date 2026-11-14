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
		"content": `<style>.cs0l7acaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5c-2.5-1.5-6-1.75-9-1V20c3-.75 6.5-.5 9 1c2.5-1.5 6-1.75 9-1v-7.5c-3-.75-6.5-.5-9 1m0 0V21M7.745 4.596l3.728-1.398a1.5 1.5 0 0 1 1.054 0l3.728 1.398a1.5 1.5 0 0 1 0 2.808l-3.728 1.398a1.5 1.5 0 0 1-1.054 0L7.745 7.404a1.5 1.5 0 0 1 0-2.808M20 6v3.5");
}
</style><path class="cs0l7acaf"/>`,
		"fallback": "uix:genre-educational",
	});
}

export default Component;
