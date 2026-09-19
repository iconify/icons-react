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
		"content": `<style>.cnc-cgc_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.116 15.698a4.77 4.77 0 0 1 2.222 5.364a4.77 4.77 0 0 1-4.606 3.534a4.77 4.77 0 0 1-4.606-3.534a4.77 4.77 0 0 1 2.222-5.364m2.384-5.407v9.537m-3.159 17.881v-9.536l6.318 9.536v-9.536M10.5 15.06h3.099m1.669 4.768H10.5v-9.536h4.768m3.576 9.536v-9.536h2.146a4.17 4.17 0 0 1 4.172 4.172v1.192a4.17 4.17 0 0 1-4.172 4.172z");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="cnc-cgc_o"/>`,
		"fallback": "arcticons:edion",
	});
}

export default Component;
