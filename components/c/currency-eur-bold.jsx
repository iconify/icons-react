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
		"content": `<style>.rcitb8u2t {
  fill: currentColor;
  d: path("M192.94 189.66a12 12 0 0 1-.94 17A84 84 0 0 1 53.55 160H40a12 12 0 0 1 0-24h12v-16H40a12 12 0 0 1 0-24h13.55A84 84 0 0 1 192 49.39a12 12 0 0 1-16 17.89A60 60 0 0 0 78.18 96H136a12 12 0 0 1 0 24H76v16h44a12 12 0 0 1 0 24H78.18A60 60 0 0 0 176 188.72a12 12 0 0 1 16.94.94");
}
</style><path class="rcitb8u2t"/>`,
		"fallback": "ph:currency-eur-bold",
	});
}

export default Component;
