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
		"content": `<style>.bvlrw_b-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.371 5.57c-4.418 18.053-6.16 30.307-19.218 33.913");
}

.cy8q42aet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.366 5.5S-6.241 15.648 9.757 32.142C28.017 50.967 50.24 45.305 38.366 5.5");
}
</style><path class="cy8q42aet"/><path class="bvlrw_b-r"/>`,
		"fallback": "arcticons:buckwheat",
	});
}

export default Component;
