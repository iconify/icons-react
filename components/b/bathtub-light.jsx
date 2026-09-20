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
		"content": `<style>.rsdns6bxl {
  fill: currentColor;
  d: path("M240 98h-34v-2a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v2H62V52a14 14 0 0 1 14-14a14.47 14.47 0 0 1 14.12 11.19a6 6 0 1 0 11.76-2.38A26.32 26.32 0 0 0 76 26a26 26 0 0 0-26 26v46H16a6 6 0 0 0-6 6v40a54.06 54.06 0 0 0 54 54h2v18a6 6 0 0 0 12 0v-18h100v18a6 6 0 0 0 12 0v-18h2a54.06 54.06 0 0 0 54-54v-40a6 6 0 0 0-6-6m-98 4h52v36h-52Zm92 42a42 42 0 0 1-42 42H64a42 42 0 0 1-42-42v-34h108v34a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-34h28Z");
}
</style><path class="rsdns6bxl"/>`,
		"fallback": "ph:bathtub-light",
	});
}

export default Component;
