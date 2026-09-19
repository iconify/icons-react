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
		"content": `<style>.y6kv86zuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.972C7.573 26.442 15.141 33.028 24 33.028s16.425-6.58 19.5-18.056H33.094");
}
</style><path class="y6kv86zuf"/>`,
		"fallback": "arcticons:gearbest",
	});
}

export default Component;
