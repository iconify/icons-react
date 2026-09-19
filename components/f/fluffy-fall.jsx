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
		"content": `<style>.f-olpacdp {
  cx: 8.68px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.179px;
  ry: 5.589px;
}

.i4ytw-bcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.741 24.643c.477 2.208 1.685 2.962 3.259 2.962s2.782-.754 3.259-2.962");
}

.ne0fh7buw {
  cx: 39.321px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.179px;
  ry: 5.589px;
}
</style><path class="i4ytw-bcb"/><ellipse class="f-olpacdp"/><ellipse class="ne0fh7buw"/>`,
		"fallback": "arcticons:fluffy-fall",
	});
}

export default Component;
