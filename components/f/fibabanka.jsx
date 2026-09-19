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

.gx33wbb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.158 23.184L24.809 9.835a1.144 1.144 0 0 0-1.618 0L9.84 23.185a1.144 1.144 0 0 0 0 1.617l13.35 13.35a1.144 1.144 0 0 0 1.618 0l13.349-13.35a1.144 1.144 0 0 0 0-1.618M21.6 26.404l-12.074-2.63");
}

.vj56mxbev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 9.53l-2.4 16.874L24 38.5m-2.4-12.096l16.888-2.511");
}
</style><circle class="cpk0fnbgt"/><path class="gx33wbb5n"/><path class="vj56mxbev"/>`,
		"fallback": "arcticons:fibabanka",
	});
}

export default Component;
