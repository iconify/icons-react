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
		"content": `<style>.dimesbwim {
  fill: currentColor;
  d: path("M188.47 193.66a6 6 0 0 1-.47 8.48A78 78 0 0 1 58.25 150H40a6 6 0 0 1 0-12h18v-20H40a6 6 0 0 1 0-12h18.25A78 78 0 0 1 188 53.86a6 6 0 0 1-8 9A66 66 0 0 0 70.29 106H136a6 6 0 0 1 0 12H70v20h50a6 6 0 0 1 0 12H70.29A66 66 0 0 0 180 193.2a6 6 0 0 1 8.47.46");
}
</style><path class="dimesbwim"/>`,
		"fallback": "ph:currency-eur-light",
	});
}

export default Component;
