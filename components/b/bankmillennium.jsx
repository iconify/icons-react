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
		"content": `<style>.njz43f1lt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.951 5.5c6.273.786 8.011 6.101 8.863 8.007L25.822 40.37l11.626-27.614l5.6 29.743");
}

.z-mln4uym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.158 42.5s6.568-29.196 4.813-32.657");
}
</style><path class="njz43f1lt"/><path class="z-mln4uym"/>`,
		"fallback": "arcticons:bankmillennium",
	});
}

export default Component;
