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
		"content": `<style>.crfiu0aqa {
  fill: currentColor;
  d: path("M182 208a6 6 0 0 1-6 6h-16a38 38 0 0 1-32-17.55A38 38 0 0 1 96 214H80a6 6 0 0 1 0-12h16a26 26 0 0 0 26-26v-42h-18a6 6 0 0 1 0-12h18V80a26 26 0 0 0-26-26H80a6 6 0 0 1 0-12h16a38 38 0 0 1 32 17.55A38 38 0 0 1 160 42h16a6 6 0 0 1 0 12h-16a26 26 0 0 0-26 26v42h18a6 6 0 0 1 0 12h-18v42a26 26 0 0 0 26 26h16a6 6 0 0 1 6 6");
}
</style><path class="crfiu0aqa"/>`,
		"fallback": "ph:cursor-text-light",
	});
}

export default Component;
