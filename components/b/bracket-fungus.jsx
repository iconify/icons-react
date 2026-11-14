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
		"content": `<style>.pkmylpeay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m3.5-19v19m0-16h14a7 5.5 0 0 1-14 0m0 8.5h12a6 4.5 0 0 1-12 0");
}
</style><path class="pkmylpeay"/>`,
		"fallback": "uix-sharp:bracket-fungus",
	});
}

export default Component;
