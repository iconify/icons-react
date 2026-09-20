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
		"content": `<style>.bjcdftdyi {
  fill: currentColor;
  d: path("M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z");
}
</style><path class="bjcdftdyi"/>`,
		"fallback": "material-symbols:bar-chart",
	});
}

export default Component;
