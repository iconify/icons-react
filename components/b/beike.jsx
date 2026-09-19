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
		"content": `<style>.mr75miu3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.565 29.301a15.5 15.5 0 0 1-29.13 0M4.5 24L24 8.5L43.5 24");
}
</style><path class="mr75miu3y"/>`,
		"fallback": "arcticons:beike",
	});
}

export default Component;
