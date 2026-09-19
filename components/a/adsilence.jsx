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
		"content": `<style>.f7_ptbbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.57v14.596h9.709l12.152 9.379V6.63l-12.02 9.94zm39-10.468L7.802 41.898m28.086-27.847a12.09 12.09 0 0 1 0 19.805");
}
</style><path class="f7_ptbbdf"/>`,
		"fallback": "arcticons:adsilence",
	});
}

export default Component;
