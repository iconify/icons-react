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
		"content": `<style>.h5v6unsfc {
  fill: currentColor;
  d: path("M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M92 212.7V152a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v60.7a92.42 92.42 0 0 1-72 0m56-72.7h-40V98.47l40-20Zm45.05 53.05A92 92 0 0 1 172 208.83V152a12 12 0 0 0-12-12h-4V72a4 4 0 0 0-5.79-3.58l-48 24A4 4 0 0 0 100 96v44h-4a12 12 0 0 0-12 12v56.83a92 92 0 1 1 109.05-15.78");
}
</style><path class="h5v6unsfc"/>`,
		"fallback": "ph:highlighter-circle-thin",
	});
}

export default Component;
