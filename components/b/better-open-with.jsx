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
		"content": `<style>.etjvf9bdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 10.5a5 5 0 0 0-5-5H16l8.3 8.3l-8.185 8.185a2.435 2.435 0 0 0 0 3.444l6.456 6.456c.951.95 2.493.95 3.444 0L34.2 23.7l8.3 8.3z");
}

.idl483bve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32 32v7.5a3 3 0 0 1-3 3H10.5a5 5 0 0 1-5-5V19a3 3 0 0 1 3-3H16");
}
</style><path class="idl483bve"/><path class="etjvf9bdt"/>`,
		"fallback": "arcticons:better-open-with",
	});
}

export default Component;
