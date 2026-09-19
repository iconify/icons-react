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
		"content": `<style>.ehjda12_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.935 39.466A21.499 21.499 0 1 1 45.5 24h0c-.182 8.576-9.348 10.014-10.25 1.656l-1.342-8.85l-11.192 14.817l-1.342-15.96l-14.96 20.7");
}
</style><path class="ehjda12_r"/>`,
		"fallback": "arcticons:coinmarketcap",
	});
}

export default Component;
