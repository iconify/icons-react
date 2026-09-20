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
		"content": `<style>.flh831rbg {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M46 208V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2v82.2l-28.1-28.1a14 14 0 0 0-19.8 0L54.2 210H48a2 2 0 0 1-2-2m162 2H71.17l99.41-99.41a2 2 0 0 1 2.83 0L210 147.17V208a2 2 0 0 1-2 2M96 118a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10");
}
</style><path class="flh831rbg"/>`,
		"fallback": "ph:image-square-light",
	});
}

export default Component;
