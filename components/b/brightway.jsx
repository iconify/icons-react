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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pgu2_8b0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.383 44.11c10.323-10.9 12.067-22.001 10.996-29.95c-.873-6.47-6.414-8.685-9.905-6.708s-5.824 7.023-2.124 14.467c4.38 8.809 11.124 13.765 22.406 18.606");
}
</style><circle class="cpk0fnbgt"/><path class="pgu2_8b0r"/>`,
		"fallback": "arcticons:brightway",
	});
}

export default Component;
