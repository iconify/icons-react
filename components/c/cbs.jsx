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
		"content": `<style>.b1w5hzzmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.15c-9.052 0-16.981 4.736-21.5 11.85C7.019 31.114 14.948 35.85 24 35.85S40.981 31.113 45.5 24C40.981 16.886 33.052 12.15 24 12.15");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p015yvbcc {
  cx: 24px;
  cy: 24px;
  r: 11.849px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="b1w5hzzmd"/><circle class="p015yvbcc"/>`,
		"fallback": "arcticons:cbs",
	});
}

export default Component;
