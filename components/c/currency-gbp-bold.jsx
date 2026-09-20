import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n1kmamjkk {
  fill: currentColor;
  d: path("M196 208a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h4a24 24 0 0 0 24-24v-32H56a12 12 0 0 1 0-24h28V84a56 56 0 0 1 91.63-43.21a12 12 0 0 1-15.28 18.51A31.66 31.66 0 0 0 140 52a32 32 0 0 0-32 32v32h28a12 12 0 0 1 0 24h-28v32a47.74 47.74 0 0 1-6.44 24H184a12 12 0 0 1 12 12");
}
</style><path class="n1kmamjkk"/>`,
		"fallback": "ph:currency-gbp-bold",
	});
}

export default Component;
