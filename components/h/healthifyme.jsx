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

.i0ehjibui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 38.5v-29m-17 0v29m0-14.5h17m0-7.25h11.745M15.5 31.25H3.755");
}
</style><circle class="cpk0fnbgt"/><path class="i0ehjibui"/>`,
		"fallback": "arcticons:healthifyme",
	});
}

export default Component;
