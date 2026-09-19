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
		"content": `<style>.izbzu7btc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 41H19c-7.18 0-13-5.82-13-13c0-6.844 5.288-12.452 12-12.962V7h11c7.18 0 13 5.82 13 13c0 6.844-5.288 12.452-12.001 12.962z");
}
</style><path class="izbzu7btc"/>`,
		"fallback": "arcticons:dprime",
	});
}

export default Component;
