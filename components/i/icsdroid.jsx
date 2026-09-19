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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.udm11__zv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.801 8.957l5.962 4.552l-5.962 4.55m.973 19.938h5.222m-5.222-9.022l2.611-1.422m0 0v10.444m-8.053 0a2.61 2.61 0 0 0 2.61-2.61h0a2.61 2.61 0 0 0-2.61-2.61h-2.66h2.66a2.61 2.61 0 0 0 2.61-2.611h0a2.61 2.61 0 0 0-2.61-2.61m-4.134 9.56c.721.604 1.5.881 3.248.881h.886m-4.135-9.572c.723-.602 1.502-.877 3.25-.872l.886.002m-1.842-14.046h12.272M16.198 25.238l-5.961-4.551l5.961-4.55m6.31 4.55H10.237");
}
</style><path class="udm11__zv"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:icsdroid",
	});
}

export default Component;
