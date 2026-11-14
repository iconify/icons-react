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
		"content": `<style>.jhjhyf_jr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-17A1.5 1.5 0 0 1 4.5 3h8A1.5 1.5 0 0 1 14 4.5v17M14 11h5.5a1.5 1.5 0 0 1 1.5 1.5v9m-18.5 0h19m-15-14h4m-4 4h4");
}
</style><path class="jhjhyf_jr"/>`,
		"fallback": "uix:acquisition",
	});
}

export default Component;
