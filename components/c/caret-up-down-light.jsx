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
		"content": `<style>.fmnj6gbps {
  fill: currentColor;
  d: path("M180.24 171.76a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L128 215.51l43.76-43.75a6 6 0 0 1 8.48 0m-96-87.52L128 40.49l43.76 43.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48");
}
</style><path class="fmnj6gbps"/>`,
		"fallback": "ph:caret-up-down-light",
	});
}

export default Component;
