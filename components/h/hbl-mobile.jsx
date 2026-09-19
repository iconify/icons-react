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
		"content": `<style>.upj0w9qub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 12.395v12.21m8.09-12.21v12.21M9.5 23.977h8.09");
}

.zqhb0-b3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.984 24a3.053 3.053 0 1 1 0 6.105h-5.037v-12.21h5.037a3.053 3.053 0 1 1 0 6.105m0 0h-5.037m11.448-6.105v12.21H38.5");
}
</style><path class="upj0w9qub"/><path class="zqhb0-b3r"/>`,
		"fallback": "arcticons:hbl-mobile",
	});
}

export default Component;
