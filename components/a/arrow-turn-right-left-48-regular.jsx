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
		"content": `<style>.hpinocdkt {
  fill: currentColor;
  d: path("M9.526 9.407a1.25 1.25 0 0 1 .948-2.313l31.31 12.824c1.864.763 1.864 3.401 0 4.164L11.578 36.456l8.713 4.167a1.25 1.25 0 1 1-1.08 2.255l-11.5-5.5a1.25 1.25 0 0 1-.614-1.608l5-12a1.25 1.25 0 1 1 2.308.961l-3.951 9.483L40.273 22z");
}
</style><path class="hpinocdkt"/>`,
		"fallback": "fluent:arrow-turn-right-left-48-regular",
	});
}

export default Component;
