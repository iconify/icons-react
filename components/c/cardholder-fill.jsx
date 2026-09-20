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
		"content": `<style>.l5cmc_cws {
  fill: currentColor;
  d: path("M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24m-56 72a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40V96h176v16h-56a8 8 0 0 0-8 8M48 64h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8");
}
</style><path class="l5cmc_cws"/>`,
		"fallback": "ph:cardholder-fill",
	});
}

export default Component;
