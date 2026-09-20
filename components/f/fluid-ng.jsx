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
		"content": `<style>.q9xkc6bkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.162 26.96H17.108a8.27 8.27 0 0 0-8.27 8.27a8.27 8.27 0 0 0 8.27 8.27h22.054m-19.324-39h8.324a11 11 0 0 1 11 11v5.54H8.838V15.5a11 11 0 0 1 11-11");
}
</style><path class="q9xkc6bkj"/>`,
		"fallback": "arcticons:fluid-ng",
	});
}

export default Component;
