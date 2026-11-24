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
		"content": `<style>.chw8qebkr {
  fill: currentColor;
  d: path("M22 5v3H2V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1M2 10h8v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm11 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="chw8qebkr"/>`,
		"fallback": "coolicons:credit-card-minus-corner-fill-sharp",
	});
}

export default Component;
