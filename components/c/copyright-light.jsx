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
		"content": `<style>.d40medzdk {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-34-90a34 34 0 0 0 61.2 20.4a6 6 0 0 1 9.6 7.21a46 46 0 1 1 0-55.22a6 6 0 0 1-9.6 7.21A34 34 0 0 0 94 128");
}
</style><path class="d40medzdk"/>`,
		"fallback": "ph:copyright-light",
	});
}

export default Component;
