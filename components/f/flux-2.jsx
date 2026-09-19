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
		"content": `<style>.o5vw8-4ru {
  cx: 17.343px;
  cy: 24.701px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12.843px;
  ry: 12.87px;
}

.x4zkhdclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.813 21.613h5.712a7.976 7.976 0 0 1 0 15.95H16.354");
}

.xh7_6nb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.859 14.068a7.839 7.839 0 0 1 13.449 8.044");
}
</style><ellipse class="o5vw8-4ru"/><path class="xh7_6nb5j"/><path class="x4zkhdclo"/>`,
		"fallback": "arcticons:flux-2",
	});
}

export default Component;
