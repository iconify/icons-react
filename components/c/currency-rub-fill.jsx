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
		"content": `<style>.t-_j8vc9t {
  fill: currentColor;
  d: path("M168 104a24 24 0 0 1-24 24h-32V80h32a24 24 0 0 1 24 24m64 24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-48-24a40 40 0 0 0-40-40h-40a8 8 0 0 0-8 8v56h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h32a40 40 0 0 0 40-40");
}
</style><path class="t-_j8vc9t"/>`,
		"fallback": "ph:currency-rub-fill",
	});
}

export default Component;
