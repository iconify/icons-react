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
		"content": `<style>.cn-4nvbsw {
  fill: currentColor;
  d: path("M214 79v1a38 38 0 0 1-38 38h-42v84h10a18 18 0 0 0 12-31.42a6 6 0 1 1 8-8.94A30 30 0 0 1 144 214h-10v18a6 6 0 0 1-12 0v-18H96a6 6 0 0 1 0-12h26v-84H96a18 18 0 0 0 0 36a6 6 0 0 1 0 12a30 30 0 0 1 0-60h26V24a6 6 0 0 1 12 0v82h42a26 26 0 0 0 26-26v-1a25 25 0 0 0-25-25h-17a6 6 0 0 1 0-12h17a37 37 0 0 1 37 37M56 94H32a6 6 0 0 1-6-6v-8a38 38 0 0 1 38-38h32a6 6 0 0 1 0 12h-2v2a38 38 0 0 1-38 38m26-40H64a26 26 0 0 0-26 26v2h18a26 26 0 0 0 26-26Z");
}
</style><path class="cn-4nvbsw"/>`,
		"fallback": "ph:asclepius-light",
	});
}

export default Component;
