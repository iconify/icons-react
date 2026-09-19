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
		"content": `<style>.i2bcp-b2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.245 17.631V30.52m5.585 4.891V12.66m5.585 2.66v17.547M24 37.743V10.156M29.585 5.5v37m5.585-7.202V12.9m5.585 7.152v8.09");
}
</style><path class="i2bcp-b2j"/>`,
		"fallback": "arcticons:ambiance-alt",
	});
}

export default Component;
