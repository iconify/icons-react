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
		"content": `<style>.ln4wn4b6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5h27.75a9.25 9.25 0 0 0 0-18.5a9.25 9.25 0 0 0 0-18.5H5.5m0 18.5h27.75M5.5 33.25h27.75M5.5 14.75h27.75");
}
</style><path class="ln4wn4b6q"/>`,
		"fallback": "arcticons:bookmory",
	});
}

export default Component;
