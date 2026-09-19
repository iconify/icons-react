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
		"content": `<style>.m1emn09hf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.75 11.667l-9.25 9.25l15.417 15.417m-9.25-9.251l6.666-6.666");
}

.nu__iaccv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.25 36.333l9.25-9.25l-15.417-15.417m9.25 9.251l-6.666 6.666");
}

.v5yr5wi1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.667 33.25l9.25 9.25l15.417-15.417m-9.251 9.25l-6.666-6.666");
}

.ymu88twav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.333 14.75l-9.25-9.25l-15.417 15.417m9.251-9.25l6.666 6.666");
}
</style><path class="m1emn09hf"/><path class="ymu88twav"/><path class="nu__iaccv"/><path class="v5yr5wi1c"/>`,
		"fallback": "arcticons:ffbooster",
	});
}

export default Component;
