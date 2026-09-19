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
		"content": `<style>.lpd-10b9h {
  cx: 29.517px;
  cy: 29.517px;
  r: 12.982px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z6_a1yqbp {
  width: 24.017px;
  height: 24.017px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="z6_a1yqbp"/><circle class="lpd-10b9h"/>`,
		"fallback": "arcticons:compose-material-catalog",
	});
}

export default Component;
