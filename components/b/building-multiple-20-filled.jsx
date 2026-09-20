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
		"content": `<style>.mvd2_oy5l {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5H17a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2zm7 3h-1a2 2 0 0 0-2 2v10H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM5.25 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 9.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 11.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.25-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.75-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><path class="mvd2_oy5l"/>`,
		"fallback": "fluent:building-multiple-20-filled",
	});
}

export default Component;
