import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x6lq_w3ig {
  fill: currentColor;
  d: path("M7.5 16A1.5 1.5 0 0 0 9 14.5v-9A1.5 1.5 0 0 0 7.5 4h-2A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16zm7 0a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-2A1.5 1.5 0 0 0 11 5.5v9a1.5 1.5 0 0 0 1.5 1.5z");
}
</style><path class="x6lq_w3ig"/>`,
		"fallback": "fluent:align-space-around-vertical-20-filled",
	});
}

export default Component;
