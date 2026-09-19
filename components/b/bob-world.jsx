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

.l-0wj21qz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.59 29.161l-1.781 7.01l-1.78-7.01l-1.78 7.01l-1.781-7.01m10.119 7.009a1.77 1.77 0 0 1-1.78-1.752V33.28a1.77 1.77 0 0 1 1.78-1.752h0a1.77 1.77 0 0 1 1.78 1.752v1.14a1.77 1.77 0 0 1-1.78 1.752m3.789-2.892a1.77 1.77 0 0 1 1.78-1.753h0m-1.78 0v4.644m3.625-7.01v7.01m5.531-2.891a1.77 1.77 0 0 0-1.78-1.753h0a1.77 1.77 0 0 0-1.78 1.752v1.14a1.77 1.77 0 0 0 1.78 1.752h0a1.77 1.77 0 0 0 1.78-1.753m0 1.753v-7.01M25 26.517a3.64 3.64 0 0 1-3.581-3.672v-2.387A3.64 3.64 0 0 1 25 16.786h0a3.64 3.64 0 0 1 3.581 3.672v2.387A3.64 3.64 0 0 1 25 26.517m-14.002-6.059a3.64 3.64 0 0 1 3.58-3.672h0a3.64 3.64 0 0 1 3.582 3.672v2.387a3.64 3.64 0 0 1-3.581 3.672h0a3.64 3.64 0 0 1-3.581-3.672m0 3.672V11.829m20.842 8.629a3.64 3.64 0 0 1 3.581-3.672h0a3.64 3.64 0 0 1 3.581 3.672v2.387a3.64 3.64 0 0 1-3.58 3.672h0a3.64 3.64 0 0 1-3.582-3.672m0 3.672V11.829");
}
</style><path class="l-0wj21qz"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:bob-world",
	});
}

export default Component;
