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
		"content": `<style>.zos7-9d6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.823 22.28L21.591 4.5h16.705v27.947l-10.373-3.839l-.261-14.209l-8.094 11.118Zm5.037 11.053L38.297 43.5H9.704Z");
}
</style><path class="zos7-9d6f"/>`,
		"fallback": "arcticons:gsmarena",
	});
}

export default Component;
