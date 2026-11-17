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
		"content": `<style>.btcmmqbvh {
  fill: currentColor;
  d: path("M15.333 16H13v2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1h5v-2H8.667a3 3 0 0 1-3-3V8.574a3 3 0 0 1 1.024-2.258L10.024 3.4a3 3 0 0 1 3.952 0l3.333 2.916a3 3 0 0 1 1.024 2.258V13a3 3 0 0 1-3 3");
}
</style><path class="btcmmqbvh"/>`,
		"fallback": "coolicons:house-geothermal-fill",
	});
}

export default Component;
