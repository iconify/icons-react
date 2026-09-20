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
		"content": `<style>.kkmkn5ckt {
  fill: currentColor;
  d: path("M207.39 115.06A8 8 0 0 1 200 120h-64v96a8 8 0 0 1-16 0v-96H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72");
}
</style><path class="kkmkn5ckt"/>`,
		"fallback": "ph:arrow-up-fill",
	});
}

export default Component;
