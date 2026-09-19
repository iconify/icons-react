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

.l0r0xsb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 21.813h4.375v4.375H6.5zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H15.25zm4.375 0H24v4.375h-4.375zm4.375 0h4.375v4.375H24zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H32.75zm4.375 0H41.5v4.375h-4.375z");
}
</style><path class="l0r0xsb4k"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:hypocam",
	});
}

export default Component;
