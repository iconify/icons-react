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
		"content": `<style>.b9wkx2bql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 19.757l4.313 4.313L24 28.384l-4.313-4.314z");
}

.xjhlh8btn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.9 24L24 36.9L11.1 24l8.6-8.6l-4.3-4.3L2.5 24L24 45.5L45.5 24L24 2.5l-4.3 4.3z");
}
</style><path class="xjhlh8btn"/><path class="b9wkx2bql"/>`,
		"fallback": "arcticons:destiny-item-manager",
	});
}

export default Component;
