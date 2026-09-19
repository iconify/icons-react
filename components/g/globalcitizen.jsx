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
		"content": `<style>.j-z12wdbo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 11.5A12.5 12.5 0 1 1 11.5 24A12.5 12.5 0 0 1 24 11.5Z");
}

.p13c5lb7i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 1 2.5 24A21.503 21.503 0 0 1 24 2.5Z");
}
</style><path class="p13c5lb7i"/><path class="j-z12wdbo"/>`,
		"fallback": "arcticons:globalcitizen",
	});
}

export default Component;
