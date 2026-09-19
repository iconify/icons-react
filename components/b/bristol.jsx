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

.k8_r54btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.28 23.227a4.636 4.636 0 1 1 0 9.273h-9.196v-17h11.514m-2.27 7.727h-9.243");
}
</style><circle class="cpk0fnbgt"/><path class="k8_r54btl"/>`,
		"fallback": "arcticons:bristol",
	});
}

export default Component;
