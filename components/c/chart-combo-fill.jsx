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
		"content": `<style>.rhpijc8vk {
  fill: currentColor;
  d: path("M2 4a1 1 0 0 1 2 0v4.586l4.293-4.293a1 1 0 0 1 1.262-.125l5.318 3.545l5.42-5.42a.999.999 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.262.125L9.127 6.287L4 11.414V18a1 1 0 0 0 1 1h1v-3a1 1 0 0 1 2 0v3h4v-5a1 1 0 0 1 2 0v5h4v-7a1 1 0 0 1 2 0v7h1a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3Z");
}
</style><path class="rhpijc8vk"/>`,
		"fallback": "coolicons:chart-combo-fill",
	});
}

export default Component;
