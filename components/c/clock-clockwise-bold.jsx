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
		"content": `<style>.wt8b7zb8d {
  fill: currentColor;
  d: path("M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m84-28a12 12 0 0 0-12 12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100 100 0 1 0-2.07 143.44a12 12 0 0 0-16.48-17.46a76 76 0 1 1 1.53-109.06C187.61 80.2 193 86 198.23 92H184a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12");
}
</style><path class="wt8b7zb8d"/>`,
		"fallback": "ph:clock-clockwise-bold",
	});
}

export default Component;
