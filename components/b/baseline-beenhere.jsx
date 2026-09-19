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
		"content": `<style>.fycuzacur {
  fill: currentColor;
  d: path("M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-9 15l-5-5l1.41-1.41L10 13.17l7.59-7.59L19 7z");
}
</style><path class="fycuzacur"/>`,
		"fallback": "ic:baseline-beenhere",
	});
}

export default Component;
