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
		"content": `<style>.a7nxe7_tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.268L16.907 24L24 33.732");
}

.qdvztpbtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.923 6.743H18.516L31.093 24L18.516 41.257h11.407L42.5 24zM18.077 41.257L5.5 24L18.077 6.743");
}
</style><path class="qdvztpbtq"/><path class="a7nxe7_tm"/>`,
		"fallback": "arcticons:caribbean",
	});
}

export default Component;
