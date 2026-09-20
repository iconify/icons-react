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
		"content": `<style>.blzn-1b0i {
  fill: currentColor;
  d: path("M232 72h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 72H24a12 12 0 0 0-12 12v116a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V84a12 12 0 0 0-12-12M96 188H36V96h60a20 20 0 0 1 20 20v76.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V116a20 20 0 0 1 20-20h60ZM86.4 40.79a52 52 0 0 1 83.2 0a12 12 0 0 1-19.19 14.42a28 28 0 0 0-44.82 0A12 12 0 0 1 86.4 40.79");
}
</style><path class="blzn-1b0i"/>`,
		"fallback": "ph:book-open-user-bold",
	});
}

export default Component;
