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
		"content": `<style>.g8h4y3i9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.178 22.7c-.911-1.1-.911-2.2-10.022-2.2H4c5.467 3.3 16.4 3.3 33.711 3.3c16.4 0 0 7.7 0 7.7l-6.378-1.1s7.29-2.2 9.111-4.4");
}
</style><path class="g8h4y3i9d"/>`,
		"fallback": "arcticons:british-airways",
	});
}

export default Component;
