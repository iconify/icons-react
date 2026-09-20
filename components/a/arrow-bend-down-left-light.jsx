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
		"content": `<style>.u7ir8y06n {
  fill: currentColor;
  d: path("M230 56a102.12 102.12 0 0 1-102 102H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 146H128a90.1 90.1 0 0 0 90-90a6 6 0 0 1 12 0");
}
</style><path class="u7ir8y06n"/>`,
		"fallback": "ph:arrow-bend-down-left-light",
	});
}

export default Component;
