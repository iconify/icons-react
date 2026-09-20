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
		"content": `<style>.w9cq2qnpe {
  fill: currentColor;
  d: path("M7 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.216-7.174A1.5 1.5 0 0 1 8.124 2h3.764a1.5 1.5 0 0 1 1.342.83L13.815 4h1.69a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h1.69zM10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="w9cq2qnpe"/>`,
		"fallback": "fluent:camera-20-filled",
	});
}

export default Component;
