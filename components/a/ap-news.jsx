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
		"content": `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.ff1nx9bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.755 33.62V14.38h6.298c3.56 0 6.447 2.894 6.447 6.462s-2.886 6.46-6.447 6.46h-6.298M9.5 33.562l6.385-19.181m6.12 19.238l-6.12-19.238m4.072 12.803h-8.334");
}
</style><path class="c2xrbabwq"/><path class="ff1nx9bwz"/>`,
		"fallback": "arcticons:ap-news",
	});
}

export default Component;
