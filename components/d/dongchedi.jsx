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
		"content": `<style>.byivusbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.707 39.706A18.54 18.54 0 0 1 5.5 26.82C5.5 16.59 13.783 8.294 24 8.294s18.5 8.295 18.5 18.527a18.54 18.54 0 0 1-5.207 12.885");
}

.pcycbw-ab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.707 29.521c5.03-1.83 11.543-2.843 18.293-2.843c6.748 0 13.26 1.012 18.29 2.842");
}
</style><path class="byivusbpv"/><path class="pcycbw-ab"/>`,
		"fallback": "arcticons:dongchedi",
	});
}

export default Component;
