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

.f-1h-3bgg {
  cx: 24px;
  cy: 24px;
  r: 17.649px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k-fmqjbvg {
  cx: 24px;
  cy: 24px;
  r: 13.736px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="k-fmqjbvg"/><circle class="f-1h-3bgg"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:assistive-touch",
	});
}

export default Component;
