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
		"content": `<style>.fpsctej-e {
  fill: currentColor;
  d: path("M11 7v6a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0m10 4v2a4 4 0 0 1-8 0v-2a4 4 0 0 1 8 0m0 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="fpsctej-e"/>`,
		"fallback": "coolicons:align-bottom-fill-round",
	});
}

export default Component;
