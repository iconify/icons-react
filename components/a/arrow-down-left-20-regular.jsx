import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p3dv1tbog {
  fill: currentColor;
  d: path("M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.793L16.147 3.146a.5.5 0 1 1 .707.708L4.707 16z");
}
</style><path class="p3dv1tbog"/>`,
		"fallback": "fluent:arrow-down-left-20-regular",
	});
}

export default Component;
