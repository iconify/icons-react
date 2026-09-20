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
		"content": `<style>.cunwxhbyw {
  fill: currentColor;
  d: path("M56 116h160a12 12 0 0 0 4.6-23.09l-160-64A12 12 0 0 0 44 40v64a12 12 0 0 0 12 12m-4-76a4 4 0 0 1 4-4a4 4 0 0 1 1.57.32h.07l159.91 64A4 4 0 0 1 216 108H56a4 4 0 0 1-4-4Zm175.74 109.61A11.75 11.75 0 0 0 216 140H56a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12a11.8 11.8 0 0 0 4.59-.93l160-64h.08a11.75 11.75 0 0 0 7.07-13.46m-10.17 6.06l-160 64A4 4 0 0 1 52 216v-64a4 4 0 0 1 4-4h160a4 4 0 0 1 1.59 7.67Z");
}
</style><path class="cunwxhbyw"/>`,
		"fallback": "ph:flip-vertical-thin",
	});
}

export default Component;
