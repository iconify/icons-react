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
		"content": `<style>.ry_gh9bjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.699 16.841L24 26.704l-7.113 12.319H5.5L24 6.977z");
}

.zgx__33rd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 39.023H31.113L24 26.704h11.387z");
}
</style><path class="ry_gh9bjw"/><path class="zgx__33rd"/>`,
		"fallback": "arcticons:axis-mutual-fund",
	});
}

export default Component;
