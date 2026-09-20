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
		"content": `<style>.k12vj8bcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.12 24h5.122m-5.122 7.88V16.12H35m-11.559 5.22a5.22 5.22 0 0 0-10.441 0v5.32a5.22 5.22 0 0 0 10.441 0h-5.22");
}

.r1mwgkhqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.707 37.52A21.4 21.4 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24S12.126 45.5 24 45.5a21.4 21.4 0 0 0 13.943-5.153l4.883 2.044z");
}
</style><path class="k12vj8bcb"/><path class="r1mwgkhqq"/>`,
		"fallback": "arcticons:gf-scanner",
	});
}

export default Component;
