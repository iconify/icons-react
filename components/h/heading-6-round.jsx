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
		"content": `<style>.m6iq38gjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5v14m8-14v14m-8-7h8m4 4a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 0v-4a3 3 0 0 1 3-3h2");
}
</style><path class="m6iq38gjo"/>`,
		"fallback": "coolicons:heading-6-round",
	});
}

export default Component;
