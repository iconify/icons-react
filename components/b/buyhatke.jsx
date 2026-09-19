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
		"content": `<style>.ef534u9yc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.43 19.228c0-4.868-1.37-13.728-9.162-13.728s-9.16 8.86-9.16 13.728m4.448 2.495h2.715c2.483 0 4.496 2.018 4.496 4.506s-2.013 4.506-4.496 4.506l4.496 4.4m-4.496-13.412h6.173m-8.888 4.528h8.888");
}

.xgtl3pawe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.513 14.359h30.974V42.5H8.513zm0 0l2.908-1.759l-.109-1.759h25.376l-.109 1.759l2.908 1.759");
}
</style><path class="xgtl3pawe"/><path class="ef534u9yc"/>`,
		"fallback": "arcticons:buyhatke",
	});
}

export default Component;
