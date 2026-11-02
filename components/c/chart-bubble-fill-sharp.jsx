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
		"content": `<style>.fzm3c9e5q {
  fill: currentColor;
  d: path("M4 19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Zm9-12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 15 15");
}
</style><path class="fzm3c9e5q"/>`,
		"fallback": "coolicons:chart-bubble-fill-sharp",
	});
}

export default Component;
