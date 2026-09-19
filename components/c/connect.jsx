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

.djomj8bpt {
  cx: 24px;
  cy: 24px;
  r: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mxe-kgbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.07 31.07c-3.91 3.91-10.24 3.91-14.14 0c-3.91-3.91-3.91-10.24 0-14.14c3.91-3.91 10.24-3.91 14.14 0");
}
</style><circle class="cpk0fnbgt"/><circle class="djomj8bpt"/><path class="mxe-kgbgt"/>`,
		"fallback": "arcticons:connect",
	});
}

export default Component;
