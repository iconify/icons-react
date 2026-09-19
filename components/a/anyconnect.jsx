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

.f24o6_b7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.932 2.96s-10.991 8.362-5.864 18.08C27.196 30.758 45 28.3 45 28.3");
}

.j707ru0gz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.75 21S19.2 6.616 30.4 15.5s.1 28.9.1 28.9");
}
</style><circle class="cpk0fnbgt"/><path class="f24o6_b7t"/><path class="j707ru0gz"/>`,
		"fallback": "arcticons:anyconnect",
	});
}

export default Component;
