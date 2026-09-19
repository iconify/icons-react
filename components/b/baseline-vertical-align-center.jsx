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
		"content": `<style>.qav6brbvh {
  fill: currentColor;
  d: path("M8 19h3v4h2v-4h3l-4-4zm8-14h-3V1h-2v4H8l4 4zM4 11v2h16v-2z");
}
</style><path class="qav6brbvh"/>`,
		"fallback": "ic:baseline-vertical-align-center",
	});
}

export default Component;
