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
		"content": `<style>.l8242nbgd {
  fill: currentColor;
  d: path("M134 120v96a6 6 0 0 1-12 0v-96a6 6 0 0 1 12 0m66 74a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6m24-32h-18V40a6 6 0 0 0-12 0v122h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-168 0a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m24-32H62V40a6 6 0 0 0-12 0v90H32a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m72-48h-18V40a6 6 0 0 0-12 0v42h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12");
}
</style><path class="l8242nbgd"/>`,
		"fallback": "ph:faders-light",
	});
}

export default Component;
