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
		"content": `<style>.ia5lan3ke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.423 9.232c-6.309-6.31-16.537-6.31-22.846 0c-6.309 6.308-6.309 16.537 0 22.845L24 43.5l11.423-11.423c6.309-6.308 6.309-16.537 0-22.845");
}

.yohvmbb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.103 37.398L17.218 24.513l4.188-4.187a6.124 6.124 0 0 1 8.697 0a6.124 6.124 0 0 1 0 8.697l-4.188 4.187");
}
</style><path class="yohvmbb4g"/><path class="ia5lan3ke"/>`,
		"fallback": "arcticons:handyparken",
	});
}

export default Component;
