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
		"content": `<style>.d4sjqob7l {
  fill: currentColor;
  d: path("M16 18H6V8h3v4.77L15.98 6L18 8.03L11.15 15H16z");
}
</style><path class="d4sjqob7l"/>`,
		"fallback": "ic:baseline-transit-enterexit",
	});
}

export default Component;
