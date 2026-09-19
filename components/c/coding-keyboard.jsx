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

.tdtezzj3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.498 20v8m3.707-1.35l5-2.65l-5-2.65m-7.41-2.42s-2 2.273-2 5.075s2 5.075 2 5.075");
}
</style><path class="tdtezzj3q"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:coding-keyboard",
	});
}

export default Component;
