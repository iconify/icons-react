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
		"content": `<style>.wz4anbbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 10.5v20h6v-20h21a6 6 0 0 0-6-6h-15a6 6 0 0 0-6 6m21 27h-21a6 6 0 0 0 6 6h15a6 6 0 0 0 6-6v-20h-6z");
}
</style><path class="wz4anbbdl"/>`,
		"fallback": "arcticons:glassdoor",
	});
}

export default Component;
