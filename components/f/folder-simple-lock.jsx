import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tgaqmkbec {
  fill: currentColor;
  d: path("M232 88v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m0 80v40a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h8v-4a28 28 0 0 1 56 0v4h8a8 8 0 0 1 8 8m-56-8h24v-4a12 12 0 0 0-24 0Zm40 16h-56v24h56Z");
}
</style><path class="tgaqmkbec"/>`,
		"fallback": "ph:folder-simple-lock",
	});
}

export default Component;
