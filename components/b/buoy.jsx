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
		"content": `<style>.mj-pc85gj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.639 38.139L24 44.5l6.361-6.361m-20.5-20.5L3.5 24l6.361 6.361m20.5-20.5L24 3.5l-6.361 6.361m20.5 20.5L44.5 24l-6.361-6.361M24 16.5l7.5 7.5l-7.5 7.501l-7.5-7.5z");
}
</style><path class="mj-pc85gj"/>`,
		"fallback": "arcticons:buoy",
	});
}

export default Component;
