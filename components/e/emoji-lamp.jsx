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
		"content": `<style>.t5n5mxbnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.978 42.5h8.044m0-6.435v-1.811a9.29 9.29 0 0 1 3.504-7.249a12.08 12.08 0 0 0 4.54-9.482C36.055 10.88 30.667 5.5 24.025 5.5c-6.688 0-12.091 5.377-12.091 12.039c0 3.825 1.767 7.229 4.53 9.443c2.208 1.768 3.513 4.427 3.513 7.255v1.828z");
}
</style><path class="t5n5mxbnn"/>`,
		"fallback": "arcticons:emoji-lamp",
	});
}

export default Component;
