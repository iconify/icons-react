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
		"content": `<style>.dj450ukji {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m63.6-94.8l-48-36A6 6 0 0 0 134 92v30L87.6 87.2A6 6 0 0 0 78 92v72a6 6 0 0 0 9.6 4.8L134 134v30a6 6 0 0 0 9.6 4.8l48-36a6 6 0 0 0 0-9.6M90 152v-48l32 24Zm56 0v-48l32 24Z");
}
</style><path class="dj450ukji"/>`,
		"fallback": "ph:fast-forward-circle-light",
	});
}

export default Component;
