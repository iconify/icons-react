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
		"content": `<style>.l9tdw3b7m {
  fill: currentColor;
  d: path("M236 56v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h37.7l-34.17-31.31l-.13-.12a84 84 0 1 0-1.75 120.51a4 4 0 0 1 5.5 5.82A91.43 91.43 0 0 1 128 220h-1.26A92 92 0 1 1 193 62.84l35 32.05V56a4 4 0 1 1 8 0");
}
</style><path class="l9tdw3b7m"/>`,
		"fallback": "ph:arrow-clockwise-thin",
	});
}

export default Component;
