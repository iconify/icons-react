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
		"content": `<style>.caqwkl0yf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.611 17.843V6.915h-4.96v6.496");
}

.er8hx1byv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.422L4.5 24L24 6.578L43.5 24z");
}

.tru-mtrqz {
  cx: 24px;
  cy: 21.797px;
  r: 6.853px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uaxojdb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24L24 6.578L43.5 24m-8.517 7.609l-5.87-5.246m-10.226-.006l-5.877 5.252");
}
</style><path class="er8hx1byv"/><path class="uaxojdb7j"/><circle class="tru-mtrqz"/><path class="caqwkl0yf"/>`,
		"fallback": "arcticons:burgernet",
	});
}

export default Component;
