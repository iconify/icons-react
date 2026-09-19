import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jhq01jjbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.29 10.84a6.34 6.34 0 1 0-12.67 0v.28a14.06 14.06 0 0 0-16.38 1.41a2.9 2.9 0 1 0-3.26 4a14.1 14.1 0 0 0 12.45 20.79a13.8 13.8 0 0 0 4.13-.62a4.89 4.89 0 1 0 5.18-2.91a14 14 0 0 0 3.38-16.68a6 6 0 0 0 .83.07a6.34 6.34 0 0 0 6.34-6.34");
}
</style><path class="jhq01jjbr"/>`,
		"fallback": "arcticons:2050",
	});
}

export default Component;
