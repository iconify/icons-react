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
		"content": `<style>.ci3lq1s9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.203 36.391L24 8.046l-9.203 28.345m-2.369-9.084h23.144m-7.612 4.921H12.428m9.729-9.841h-9.729");
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
</style><path class="ci3lq1s9a"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:areada",
	});
}

export default Component;
