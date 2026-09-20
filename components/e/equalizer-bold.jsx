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
		"content": `<style>.h1vdaxjxz {
  fill: currentColor;
  d: path("M80 108a12 12 0 0 1-12 12H28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 28H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40H28a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m80-40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m40-96h40a12 12 0 0 0 0-24h-40a12 12 0 0 0 0 24m40 16h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m0 40h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24");
}
</style><path class="h1vdaxjxz"/>`,
		"fallback": "ph:equalizer-bold",
	});
}

export default Component;
