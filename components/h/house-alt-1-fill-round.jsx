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
		"content": `<style>.iq1z1-b3f {
  fill: currentColor;
  d: path("M11 17v1a4 4 0 0 1-8 0v-6.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V18a4 4 0 0 1-8 0v-1a1 1 0 0 0-2 0");
}
</style><path class="iq1z1-b3f"/>`,
		"fallback": "coolicons:house-alt-1-fill-round",
	});
}

export default Component;
