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
		"content": `<style>.gaiy8f7_p {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-48-96v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34L93.17 98.83a4 4 0 0 1 5.66-5.66L156 150.34V112a4 4 0 0 1 8 0");
}
</style><path class="gaiy8f7_p"/>`,
		"fallback": "ph:arrow-square-down-right-thin",
	});
}

export default Component;
