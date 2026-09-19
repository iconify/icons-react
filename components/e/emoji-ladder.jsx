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
		"content": `<style>.i60ui7bsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.872 42.5l12-37m-1.743 37l11.999-37M23.674 9.191h10.257m-13.058 8.638H31.13m-5.602 17.274H15.27m2.802-8.637h10.257");
}
</style><path class="i60ui7bsc"/>`,
		"fallback": "arcticons:emoji-ladder",
	});
}

export default Component;
