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
		"content": `<style>.yc5r8weud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.695 11.587c-.45-.943-.292-2.34.418-3.107c.677-.73 2.04-1.083 2.923-.623l25.305 13.186c1.08.563 2.217 1.424 2.217 2.957s-1.137 2.394-2.217 2.957L12.036 40.143c-.884.46-2.246.108-2.923-.623c-.71-.766-.87-2.164-.418-3.107c1.725-3.606 3.35-6.956 3.35-12.413s-1.625-8.807-3.35-12.413");
}
</style><path class="yc5r8weud"/>`,
		"fallback": "arcticons:coupang-play",
	});
}

export default Component;
