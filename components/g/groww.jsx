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

.f6vczvb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.23 29.56L18.47 21l12.94 5.3l11.84-11.89M12.13 41.93l7.12-4.01l12.94 5.3l12.13-12.17");
}

.yjyu0acsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.37 36.31l12.1-6.8l12.94 5.3l13.86-13.92");
}
</style><circle class="cpk0fnbgt"/><path class="yjyu0acsa"/><path class="f6vczvb1v"/>`,
		"fallback": "arcticons:groww",
	});
}

export default Component;
