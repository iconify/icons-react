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
		"content": `<style>.d7ujgtb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 33.25A9.25 9.25 0 1 1 14.75 24H24zm0-18.5A9.25 9.25 0 1 1 33.25 24H24z");
}
</style><path class="d7ujgtb9s"/>`,
		"fallback": "arcticons:freshmile",
	});
}

export default Component;
