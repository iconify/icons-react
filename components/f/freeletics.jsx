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
		"content": `<style>.unyx0sbsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.801 29.306L38.496 9.504L18.694 4.199L4.199 18.694l5.305 19.802l19.802 5.305zM13 39.432V9.893");
}
</style><path class="unyx0sbsj"/>`,
		"fallback": "arcticons:freeletics",
	});
}

export default Component;
