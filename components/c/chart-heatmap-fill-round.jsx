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
		"content": `<style>.rnbnidc0o {
  fill: currentColor;
  d: path("M11 2v9H2V7a5 5 0 0 1 5-5Zm2 9V2h4a5 5 0 0 1 5 5v4ZM5.158 6.221a2 2 0 1 0 3.684 1.558A2 2 0 0 0 5.158 6.22M17 8h.01a1 1 0 0 0 0-2H17a1 1 0 0 0 0 2m-6 5v9H7a5 5 0 0 1-5-5v-4Zm11 0v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-4v-9Zm-6.842 3.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558");
}
</style><path class="rnbnidc0o"/>`,
		"fallback": "coolicons:chart-heatmap-fill-round",
	});
}

export default Component;
