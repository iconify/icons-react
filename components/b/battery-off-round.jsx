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
		"content": `<style>.jsnxmpbfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.562 16.562c-.455.278-.99.438-1.562.438H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1m6 0h2a3 3 0 0 1 3 3v2m3-2v4M2 2l20 20");
}
</style><path class="jsnxmpbfo"/>`,
		"fallback": "coolicons:battery-off-round",
	});
}

export default Component;
