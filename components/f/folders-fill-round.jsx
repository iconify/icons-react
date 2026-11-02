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
		"content": `<style>.ju7hpi_7v {
  fill: currentColor;
  d: path("M9 2h3c.265 0 .52.105.707.293L14.414 4H17a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0V9a3 3 0 0 0-3-3h-3a1 1 0 0 1-.707-.293L11.586 4H9a1 1 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3m1.414 8H13a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6a3 3 0 0 1 3-3h3c.265 0 .52.105.707.293Z");
}
</style><path class="ju7hpi_7v"/>`,
		"fallback": "coolicons:folders-fill-round",
	});
}

export default Component;
