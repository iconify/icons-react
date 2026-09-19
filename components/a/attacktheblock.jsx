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
		"content": `<style>.pkln_dbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.38 5.5H24v24.13H5.98zM5.98 29.63V42.5L17.5 29.63m8.88 0l3.84 4.3H17.78l3.85-4.3M25.62 5.5H24v24.13h18.02zm16.4 24.13V42.5L30.5 29.63");
}
</style><path class="pkln_dbas"/>`,
		"fallback": "arcticons:attacktheblock",
	});
}

export default Component;
