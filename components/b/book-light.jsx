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
		"content": `<style>.xy41ccydy {
  fill: currentColor;
  d: path("M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z");
}
</style><path class="xy41ccydy"/>`,
		"fallback": "ph:book-light",
	});
}

export default Component;
