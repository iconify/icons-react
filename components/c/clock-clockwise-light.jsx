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
		"content": `<style>.loetambad {
  fill: currentColor;
  d: path("M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m90-22a6 6 0 0 0-6 6v23.36c-7.48-8.83-14.94-17.13-23.53-25.83a94 94 0 1 0-1.95 134.83a6 6 0 0 0-8.24-8.72A82 82 0 1 1 186 70c9.24 9.36 17.18 18.3 25.31 28H184a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6");
}
</style><path class="loetambad"/>`,
		"fallback": "ph:clock-clockwise-light",
	});
}

export default Component;
