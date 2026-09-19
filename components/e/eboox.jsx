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
		"content": `<style>.jml7h19dk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.268v23.243h14.511L24 38.974l4.989-3.463H43.5V12.268");
}

.npv61hk0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.765 9.026L24 11.331v20.521L8.765 29.547zm30.469 0L24 11.331v20.521l15.234-2.305z");
}
</style><path class="jml7h19dk"/><path class="npv61hk0x"/>`,
		"fallback": "arcticons:eboox",
	});
}

export default Component;
