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
		"content": `<style>.hjsq5-bmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 24L24 3.5L44.498 24l-20.5 20.5z");
}

.wrsy2vb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.113 8.613L13.732 23.994l10.274 10.274L34.28 23.994l-5.149-5.149l-5.161 5.161");
}
</style><path class="wrsy2vb-q"/><path class="hjsq5-bmv"/>`,
		"fallback": "arcticons:guardian-tales",
	});
}

export default Component;
