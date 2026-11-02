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
		"content": `<style>.h0wwvqb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19v-5H6V3h12v11h-4v5a2 2 0 1 1-4 0m-4-9h12m-8-7v3m4-3v3");
}
</style><path class="h0wwvqb9x"/>`,
		"fallback": "coolicons:brush-sharp",
	});
}

export default Component;
