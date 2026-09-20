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
		"content": `<style>.f183c1b5s {
  fill: currentColor;
  d: path("M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26");
}
</style><path class="f183c1b5s"/>`,
		"fallback": "ph:drop-half-bottom-fill",
	});
}

export default Component;
