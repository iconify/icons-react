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
		"content": `<style>.zl88tvb9c {
  fill: currentColor;
  d: path("M7 3v11a3 3 0 0 0 3 3h11a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-7a5 5 0 0 1-5-5V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0m3 2h4a5 5 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3h-4a1 1 0 0 1 0-2");
}
</style><path class="zl88tvb9c"/>`,
		"fallback": "coolicons:crop-fill-round",
	});
}

export default Component;
