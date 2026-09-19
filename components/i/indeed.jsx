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
		"content": `<style>.km49dimkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.758 27.267V40.53c0 3.958 6.964 3.96 6.964 0V27.267a7.72 7.72 0 0 1-6.964 0");
}

.qfdg9mrxe {
  cx: 26.468px;
  cy: 16.146px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.17px;
  ry: 4.139px;
}

.rac6dzfyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.518 22.771c2.33-9.728 11.661-25.061 26.964-14.96");
}
</style><path class="km49dimkq"/><ellipse class="qfdg9mrxe"/><path class="rac6dzfyy"/>`,
		"fallback": "arcticons:indeed",
	});
}

export default Component;
