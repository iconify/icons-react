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
		"content": `<style>.mftiunbqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 18H18v12h12zm12.5 3V9.5a4 4 0 0 0-4-4H27m-6 0H9.5a4 4 0 0 0-4 4V21m0 6v11.5a4 4 0 0 0 4 4H21m6 0h11.5a4 4 0 0 0 4-4V27");
}
</style><path class="mftiunbqq"/>`,
		"fallback": "arcticons:hdfc-bank",
	});
}

export default Component;
