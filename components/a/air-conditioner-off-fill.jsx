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
		"content": `<style>.x-bjb3nah {
  fill: currentColor;
  d: path("M5 2h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m2 5a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z");
}
</style><path class="x-bjb3nah"/>`,
		"fallback": "coolicons:air-conditioner-off-fill",
	});
}

export default Component;
