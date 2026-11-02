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
		"content": `<style>.h2qe-4blg {
  fill: currentColor;
  d: path("M3 18v-8c0-.155.036-.308.106-.447l3-6A1 1 0 0 1 7 3h10c.379 0 .725.214.894.553l3 6c.07.139.106.292.106.447v8a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1m9.414-8l1.293-1.293a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 10 12h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 14 10Z");
}
</style><path class="h2qe-4blg"/>`,
		"fallback": "coolicons:car-electric-fill-sharp",
	});
}

export default Component;
