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
		"content": `<style>.nmz5rtbvd {
  fill: currentColor;
  d: path("M140 200a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-44a4 4 0 0 0 4-4V48a4 4 0 0 0-8 0v104a4 4 0 0 0 4 4");
}
</style><path class="nmz5rtbvd"/>`,
		"fallback": "ph:exclamation-mark-thin",
	});
}

export default Component;
