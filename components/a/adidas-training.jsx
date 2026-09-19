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
		"content": `<style>.eys-6lbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.227 12.859l-7.566 4.332l10.523 17.95H43.5zm-9.138 7.765l-7.565 4.333l5.97 10.184h10.243zm-9.024 7.259L4.5 32.216l1.715 2.925h10.174z");
}
</style><path class="eys-6lbvf"/>`,
		"fallback": "arcticons:adidas-training",
	});
}

export default Component;
