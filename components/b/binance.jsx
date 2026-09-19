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
		"content": `<style>.d_rl-1utw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.503 24l6.83-6.83L17.165 24l-6.83 6.831zm13.667.007l6.83-6.83l6.83 6.83l-6.83 6.83zm13.66-.001l6.83-6.83l6.83 6.83l-6.83 6.83z");
}

.hjsq5-bmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 24L24 3.5L44.498 24l-20.5 20.5z");
}
</style><path class="hjsq5-bmv"/><path class="d_rl-1utw"/>`,
		"fallback": "arcticons:binance",
	});
}

export default Component;
