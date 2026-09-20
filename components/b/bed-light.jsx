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
		"content": `<style>.yay6clblu {
  fill: currentColor;
  d: path("M216 74H30V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-34h212v34a6 6 0 0 0 12 0v-96a38 38 0 0 0-38-38M30 86h76v76H30Zm88 76V86h98a26 26 0 0 1 26 26v50Z");
}
</style><path class="yay6clblu"/>`,
		"fallback": "ph:bed-light",
	});
}

export default Component;
