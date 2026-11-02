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
		"content": `<style>.i-_a7rgxz {
  fill: currentColor;
  d: path("M6.082 9H8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1.061a8.002 8.002 0 0 1 15.878 0H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h7v-2h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1.918A6.002 6.002 0 0 0 6.082 9");
}
</style><path class="i-_a7rgxz"/>`,
		"fallback": "coolicons:headset-fill-sharp",
	});
}

export default Component;
