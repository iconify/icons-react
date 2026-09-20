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
		"content": `<style>.grj3mebhn {
  fill: currentColor;
  d: path("M205.66 85.66a8 8 0 0 1-11.32 0L160 51.31V128A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16a88.1 88.1 0 0 0 88-88V51.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="grj3mebhn"/>`,
		"fallback": "ph:arrow-bend-right-up",
	});
}

export default Component;
