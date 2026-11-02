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
		"content": `<style>.mnrvyhb3o {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm4 5a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H8a2 2 0 0 0-2 2Zm12 2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2a2 2 0 0 0 2-2");
}
</style><path class="mnrvyhb3o"/>`,
		"fallback": "coolicons:aspect-ratio-fill",
	});
}

export default Component;
