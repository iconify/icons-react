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
		"content": `<style>.pops9tmth {
  fill: currentColor;
  d: path("M164 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-12a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128");
}
</style><path class="pops9tmth"/>`,
		"fallback": "ph:chat-circle-text-thin",
	});
}

export default Component;
