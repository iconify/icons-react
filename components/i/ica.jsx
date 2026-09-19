import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wyvg6qs7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 14.764v18.472m38 0l-8.944-18.472l-6.425 13.27h0a9.236 9.236 0 1 1-4.015-12.211m17.486 13.494h-8.52");
}
</style><path class="wyvg6qs7q"/>`,
		"fallback": "arcticons:ica",
	});
}

export default Component;
