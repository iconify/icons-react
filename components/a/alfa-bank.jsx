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
		"content": `<style>.fly1p5bsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.41 32.45l6.64-20.048c.303-.914 1.596-.914 1.9 0l6.64 20.048M16 36.283h16");
}

.nax8x9e-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-9.424 19.36H18.924");
}
</style><path class="nax8x9e-k"/><path class="fly1p5bsi"/>`,
		"fallback": "arcticons:alfa-bank",
	});
}

export default Component;
