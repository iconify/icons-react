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
		"content": `<style>.f32h-7jbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.502 26.503a5.51 5.51 0 0 0-6.811-5.352c-1.967.453-3.568 2.04-4.034 4.004c-.563 2.374.412 4.574 2.129 5.812c.414.298.634.797.634 1.308v2.81h5.16V32.17c0-.448.19-.892.558-1.148a5.5 5.5 0 0 0 2.364-4.519M21.42 38h5.16");
}

.r4h1y5b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11");
}
</style><path class="r4h1y5b9l"/><path class="f32h-7jbb"/>`,
		"fallback": "arcticons:file-associations",
	});
}

export default Component;
