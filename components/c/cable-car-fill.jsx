import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jhmzj1byi {
  fill: currentColor;
  d: path("M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.56V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m144 16v32h-40v-48h24a16 16 0 0 1 16 16");
}
</style><path class="jhmzj1byi"/>`,
		"fallback": "ph:cable-car-fill",
	});
}

export default Component;
