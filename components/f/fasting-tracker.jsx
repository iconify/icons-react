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
		"content": `<style>.b6yjgkcjy {
  cx: 24px;
  cy: 24px;
  r: 17.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ov16rhb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.819 41.371l-.662-10.3c0-.653.248-.962.633-1.347l2.917-2.482c.946-.804.814-1.597.793-1.943L29 17c-.033-.551-.447-1-1-1s-1 .448-1 1v7a1 1 0 1 1-2 0v-7a1 1 0 1 0-2 0v7a1 1 0 1 1-2 0v-7c0-.552-.447-1-1-1s-.966.449-1 1l-.5 8.3c-.021.357-.116 1.165.793 1.943l2.901 2.482c.317.316.55.868.55 1.347l-.576 10.298");
}

.t67p2bbkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.625 36.375a2 2 0 0 0-2.828 2.828M24 2.5a2 2 0 1 0 0 4");
}
</style><path class="ov16rhb-r"/><circle class="cpk0fnbgt"/><circle class="b6yjgkcjy"/><path class="t67p2bbkx"/>`,
		"fallback": "arcticons:fasting-tracker",
	});
}

export default Component;
