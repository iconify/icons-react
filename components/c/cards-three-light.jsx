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
		"content": `<style>.g7ri0k64d {
  fill: currentColor;
  d: path("M208 90H48a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-96a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM50 64a6 6 0 0 1 6-6h144a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m16-32a6 6 0 0 1 6-6h112a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6");
}
</style><path class="g7ri0k64d"/>`,
		"fallback": "ph:cards-three-light",
	});
}

export default Component;
