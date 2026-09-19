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

.orzyyacrb {
  cx: 24px;
  cy: 24px;
  r: 8.52px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tnr-uneon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.48 24V4.26M28.608 24l-6.929-4v8z");
}
</style><circle class="cpk0fnbgt"/><circle class="orzyyacrb"/><path class="tnr-uneon"/>`,
		"fallback": "arcticons:beats-music",
	});
}

export default Component;
