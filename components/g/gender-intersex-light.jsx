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
		"content": `<style>.g5b2smbau {
  fill: currentColor;
  d: path("M208 26h-40a6 6 0 0 0 0 12h25.52l-30 29.94A62 62 0 1 0 114 173.7V194H88a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12h-26v-20.3a62 62 0 0 0 45.28-96.5L202 46.48V72a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-88 136a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50");
}
</style><path class="g5b2smbau"/>`,
		"fallback": "ph:gender-intersex-light",
	});
}

export default Component;
