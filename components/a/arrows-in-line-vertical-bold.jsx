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
		"content": `<style>.rhlfbqhhl {
  fill: currentColor;
  d: path("M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M119.51 96.49a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17L140 59V16a12 12 0 0 0-24 0v43l-11.51-11.49a12 12 0 0 0-17 17Zm17 63a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 197v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17Z");
}
</style><path class="rhlfbqhhl"/>`,
		"fallback": "ph:arrows-in-line-vertical-bold",
	});
}

export default Component;
