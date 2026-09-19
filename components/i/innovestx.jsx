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
		"content": `<style>.coq3m0_6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27 14.772L29.974 3.85m2.05 14.19l8.985-6.85m-7.291 14.974l10.77 1.738M16.155 29.71L7.4 36.335");
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

.ulnltlmnv {
  cx: 24px;
  cy: 24px;
  r: 9.271px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="ulnltlmnv"/><path class="coq3m0_6h"/>`,
		"fallback": "arcticons:innovestx",
	});
}

export default Component;
