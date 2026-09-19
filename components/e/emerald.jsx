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
		"content": `<style>.s3dzcxa_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.11 5.5H14.89L5.5 14.88v18.23l9.39 9.39h18.22l9.39-9.39V14.88Z");
}
</style><path class="s3dzcxa_w"/>`,
		"fallback": "arcticons:emerald",
	});
}

export default Component;
