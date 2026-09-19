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
		"content": `<style>.yc-ow3bjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 3.5l17.773 10.25v20.5L24 44.5L6.227 34.25v-20.5z");
}
</style><path class="yc-ow3bjj"/>`,
		"fallback": "arcticons:desjardins",
	});
}

export default Component;
