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
		"content": `<style>.t21pc252c {
  fill: currentColor;
  d: path("M216 34h-48a6 6 0 0 0 0 12h33.52L168 79.52l-19.76-19.76a6 6 0 1 0-8.48 8.49L159.52 88l-18.46 18.46a69.94 69.94 0 1 0 8.49 8.48L168 96.5l19.76 19.76a6 6 0 0 0 8.48-8.49L176.48 88L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-79 167a58 58 0 1 1 17-41a58 58 0 0 1-17 41");
}
</style><path class="t21pc252c"/>`,
		"fallback": "ph:gender-transgender-light",
	});
}

export default Component;
