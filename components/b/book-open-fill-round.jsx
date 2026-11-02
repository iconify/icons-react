import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lenp-1-db {
  fill: currentColor;
  d: path("M9.293 18.707C8.737 18.152 7.749 18 7 18H6a4 4 0 0 1-4-4V9a5 5 0 0 1 5-5h1a4.99 4.99 0 0 1 4 1.998A4.99 4.99 0 0 1 16 4h1a5 5 0 0 1 5 5v5a4 4 0 0 1-4 4h-1c-.749 0-1.737.152-2.293.707l-2 2a1 1 0 0 1-1.414 0ZM13 10a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0Z");
}
</style><path class="lenp-1-db"/>`,
		"fallback": "coolicons:book-open-fill-round",
	});
}

export default Component;
