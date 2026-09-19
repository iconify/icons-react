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
		"content": `<style>.gouywsbrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.45 12.181c-6.87 2.754-7.707 6.59-7.707 10.407s2.86 11.139 12.028 11.139a10.59 10.59 0 0 0 9.884-5.91");
}

.nbz64-rbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.386 18.456h22.647A17.345 17.345 0 0 0 21.438 6.115C12.18 6.115 3.5 13.384 3.5 23.32s9.1 18.565 20.552 18.565S44.5 33.745 44.5 24.244a28 28 0 0 0-.191-3.134");
}
</style><path class="gouywsbrv"/><path class="nbz64-rbu"/>`,
		"fallback": "arcticons:efteling",
	});
}

export default Component;
