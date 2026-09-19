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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hrabl2bbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.212 18.36c1.867 1.482 3.626 3.108 5.022 5.067m2.149 13.786h5.234M13.824 23.748c4.947 1.725 8.953 4.151 7.559 13.465m12.793-13.465c-4.947 1.725-8.953 4.151-7.559 13.465");
}

.kej-wojog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.63 14c2.57-.49 5.83-.79 9.37-.79s6.8.3 9.37.79m-22.88 4.83c3.9-.6 8.54-.94 13.51-.94s9.61.34 13.51.94M8.68 24.3c4.64-.62 9.83-.96 15.32-.96s10.68.34 15.32.96");
}
</style><circle class="cpk0fnbgt"/><path class="kej-wojog"/><path class="hrabl2bbz"/>`,
		"fallback": "arcticons:fnb-banking-app",
	});
}

export default Component;
