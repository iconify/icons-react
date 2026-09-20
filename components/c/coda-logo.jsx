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
		"content": `<style>.nbac2wbhq {
  fill: currentColor;
  d: path("M176 88a39.8 39.8 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56a48.37 48.37 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128");
}
</style><path class="nbac2wbhq"/>`,
		"fallback": "ph:coda-logo",
	});
}

export default Component;
