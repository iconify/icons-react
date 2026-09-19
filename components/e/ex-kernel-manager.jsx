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

.zwd7f-bph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.777 14.416l4.981 18.591m5.49-18.591L23.287 33.007m2.735-18.591H14.193m8.845 9.295H11.209m8.846 9.296H8.226");
}
</style><path class="zwd7f-bph"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:ex-kernel-manager",
	});
}

export default Component;
