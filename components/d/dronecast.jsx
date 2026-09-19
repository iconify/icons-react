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
		"content": `<style>.fjelj-byq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.74 30.7L6.5 42.43L24 5.57m4.26 25.13L41.5 42.43L24 5.57");
}

.zy6sgn2pa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.74 30.7h8.52L24 5.57Z");
}
</style><path class="fjelj-byq"/><path class="zy6sgn2pa"/>`,
		"fallback": "arcticons:dronecast",
	});
}

export default Component;
