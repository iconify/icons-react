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
		"content": `<style>.fsb26lb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.467 21.32a8.41 8.41 0 0 1 0 16.818H14.59V4.5h13.876a8.41 8.41 0 0 1 0 16.82m.001-.001H14.591m0-16.819h-3.467m3.467 16.819h-3.467m3.467 16.819h-3.467m0 5.362h25.752");
}
</style><path class="fsb26lb9i"/>`,
		"fallback": "arcticons:bitstamp",
	});
}

export default Component;
