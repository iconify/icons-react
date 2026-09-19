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
		"content": `<style>.pq8btrbjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.51 5.5H5.99v37h17.52c10.218 0 18.5-8.283 18.5-18.5S33.729 5.5 23.51 5.5m-5.494 26.035V42.5");
}

.u67axjsah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.016 31.535h5.495a7.534 7.534 0 0 0 0-15.07h-5.495z");
}
</style><path class="u67axjsah"/><path class="pq8btrbjc"/>`,
		"fallback": "arcticons:dolidroid",
	});
}

export default Component;
