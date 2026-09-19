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

.yoe7qpbxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.6 36.81L29.09 39v-4.39Zm-5.09.07H14.4m2.02-5V9h7.49a7.69 7.69 0 0 1 0 15.37h-7.49");
}
</style><path class="yoe7qpbxl"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:greenp",
	});
}

export default Component;
