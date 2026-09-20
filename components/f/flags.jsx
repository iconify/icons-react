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
		"content": `<style>.q-thu8bqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 10.569c13.168 7.684 25.353-7.972 38-.096h-.001v27.053C30.353 29.651 18.168 45.307 5 37.622z");
}

.q3uja5isj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 28.604c13.168 7.685 25.352-7.97 37.999-.096M5 19.587c13.168 7.684 25.353-7.972 38-.096");
}
</style><path class="q3uja5isj"/><path class="q-thu8bqn"/>`,
		"fallback": "arcticons:flags",
	});
}

export default Component;
