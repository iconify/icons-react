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
		"content": `<style>.pgvrd75li {
  fill: currentColor;
  d: path("M160 60H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224V72a12 12 0 0 0-12-12m4 156.23l-49.68-35.49a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM204 40v152a4 4 0 0 1-8 0V40a4 4 0 0 0-4-4H88a4 4 0 0 1 0-8h104a12 12 0 0 1 12 12");
}
</style><path class="pgvrd75li"/>`,
		"fallback": "ph:bookmarks-simple-thin",
	});
}

export default Component;
