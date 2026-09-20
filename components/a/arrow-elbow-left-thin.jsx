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
		"content": `<style>.fck0jwb2t {
  fill: currentColor;
  d: path("m234.83 98.83l-96 96a4 4 0 0 1-5.66 0L28 89.66V152a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H33.66L136 186.34l93.17-93.17a4 4 0 1 1 5.66 5.66");
}
</style><path class="fck0jwb2t"/>`,
		"fallback": "ph:arrow-elbow-left-thin",
	});
}

export default Component;
