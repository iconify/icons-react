import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zgvn56s5b {
  fill: currentColor;
  d: path("M4.854 5.146a.5.5 0 1 0-.708.708L5.293 7H1.5a.5.5 0 0 0 0 1h3.793L4.146 9.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708zm7 .708a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 8H14.5a.5.5 0 0 0 0-1h-3.793z");
}
</style><path class="zgvn56s5b"/>`,
		"fallback": "fluent:arrow-fit-in-16-regular",
	});
}

export default Component;
