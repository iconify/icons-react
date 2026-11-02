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
		"content": `<style>.bc6opcb5q {
  fill: currentColor;
  d: path("M16 8h2a4 4 0 0 1 0 8h-2v2a4 4 0 0 1-8 0v-2H6a4 4 0 0 1 0-8h2V6a4 4 0 0 1 8 0Z");
}
</style><path class="bc6opcb5q"/>`,
		"fallback": "coolicons:first-aid-fill-round",
	});
}

export default Component;
