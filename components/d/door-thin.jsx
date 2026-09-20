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
		"content": `<style>.q9rsjacru {
  fill: currentColor;
  d: path("M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M60 40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v180H60Zm104 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="q9rsjacru"/>`,
		"fallback": "ph:door-thin",
	});
}

export default Component;
