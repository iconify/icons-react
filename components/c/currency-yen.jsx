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

.l9-d90vqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.828 15.203L24 24l-5.828-8.797M24 32.797V24m-5.498 0h10.996m-10.996 4.398h10.996");
}
</style><path class="l9-d90vqe"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:currency-yen",
	});
}

export default Component;
