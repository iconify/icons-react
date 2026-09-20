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
		"content": `<style>.dq93g3nik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.878 17.966a10.7 10.7 0 0 0-1.236-1.48c-4.15-4.151-10.879-4.151-15.03 0s-4.15 10.878 0 15.029s10.88 4.15 15.03 0l6.553-6.553");
}

.x2l0lbbrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.123 30.034q.54.784 1.235 1.48c4.15 4.151 10.879 4.151 15.03 0s4.15-10.878 0-15.029s-10.88-4.15-15.03 0l-6.553 6.553");
}
</style><path class="dq93g3nik"/><path class="x2l0lbbrt"/>`,
		"fallback": "arcticons:2-accounts",
	});
}

export default Component;
