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
		"content": `<style>.hr3qidcql {
  fill: currentColor;
  d: path("m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v58a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-58h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v58H86v-58a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6");
}
</style><path class="hr3qidcql"/>`,
		"fallback": "ph:arrow-fat-line-up-light",
	});
}

export default Component;
