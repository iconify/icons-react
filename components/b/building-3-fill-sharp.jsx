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
		"content": `<style>.oio_i1biu {
  fill: currentColor;
  d: path("M6 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-6a1 1 0 0 1 .375-.781L6 10.919Zm3.375 4.219a1 1 0 0 1 1.25 0l5 4A1 1 0 0 1 16 13v6h2V5H8v4.319Z");
}
</style><path class="oio_i1biu"/>`,
		"fallback": "coolicons:building-3-fill-sharp",
	});
}

export default Component;
