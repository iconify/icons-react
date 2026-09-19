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

.hgw0qjbpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.997 14.94l6.541 12.39a3.99 3.99 0 0 1-1.666 5.392a3.99 3.99 0 0 1-5.382-1.67L20.95 18.66a3.98 3.98 0 0 1 1.661-5.377a3.983 3.983 0 0 1 5.386 1.657");
}

.hhims_8tu {
  cx: 17.336px;
  cy: 28.845px;
  r: 4.336px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="hhims_8tu"/><path class="hgw0qjbpm"/>`,
		"fallback": "arcticons:ather",
	});
}

export default Component;
