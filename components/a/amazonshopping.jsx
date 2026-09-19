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
		"content": `<style>.mazdv6g9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 29.17c.94-.47 2.61-1.1 3.11-.34s-.14 2.58-.78 4");
}

.rf1w9abyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.38 19.84h-7.86l-7.77-13a2 2 0 0 0-3.5 0l-7.77 13H6.62a3.12 3.12 0 0 0-3 3.93L8 40.08a2.84 2.84 0 0 0 2.74 2.1h26.5a2.84 2.84 0 0 0 2.76-2.1l4.41-16.31a3.12 3.12 0 0 0-3.03-3.93m-17.38-8l4.77 8h-9.54Zm-9.52 8h19.04");
}

.sdclowbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.69 29.71c1.49 1.46 5.88 3.69 10.55 3.69a12.63 12.63 0 0 0 8.59-3.21");
}
</style><path class="rf1w9abyr"/><path class="mazdv6g9m"/><path class="sdclowbdl"/>`,
		"fallback": "arcticons:amazonshopping",
	});
}

export default Component;
