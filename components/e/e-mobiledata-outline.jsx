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
		"content": `<style>.qo8v-yb4b {
  fill: currentColor;
  d: path("M8 17V7h8v2h-6v2h6v2h-6v2h6v2z");
}
</style><path class="qo8v-yb4b"/>`,
		"fallback": "material-symbols:e-mobiledata-outline",
	});
}

export default Component;
