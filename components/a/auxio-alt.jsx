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
		"content": `<style>.x8bo6k2fq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.348 4.5h-4.64v22.613l.004.005a8.693 8.693 0 1 0 4.636 7.687v-21.61h8.695V4.5Z");
}
</style><path class="x8bo6k2fq"/>`,
		"fallback": "arcticons:auxio-alt",
	});
}

export default Component;
