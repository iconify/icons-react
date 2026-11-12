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
		"content": `<style>.w3g2ivbey {
  fill: currentColor;
  d: path("M9 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm11 0V7a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0M4 21a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0Zm13 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z");
}
</style><path class="w3g2ivbey"/>`,
		"fallback": "coolicons:chart-bar-grouped-fill",
	});
}

export default Component;
