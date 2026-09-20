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
		"content": `<style>.dop9dhgnv {
  fill: currentColor;
  d: path("M7 2h10l-2 7h4l-2.925 4.225L7 4.15zm3 20v-8H7V9.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13.75 16.6z");
}
</style><path class="dop9dhgnv"/>`,
		"fallback": "material-symbols:flash-off",
	});
}

export default Component;
