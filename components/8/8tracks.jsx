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
		"content": `<style>.myh69jvxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.917V14.75A9.25 9.25 0 1 1 33.25 24h-18.5A9.25 9.25 0 1 0 24 33.25v-6.167");
}
</style><path class="myh69jvxj"/>`,
		"fallback": "arcticons:8tracks",
	});
}

export default Component;
