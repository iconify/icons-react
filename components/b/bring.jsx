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
		"content": `<style>.ih4p9ndmu {
  width: 25.999px;
  height: 32.41px;
  x: 11px;
  y: 11.09px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.nc453agpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.18 11.09v-2.2a4.39 4.39 0 0 1 4.43-4.39h8.78a4.39 4.39 0 0 1 4.39 4.39v2.2M15.55 31.56l7.86 4.53l9-15.66m-17.19-9.34h17.56");
}
</style><path class="nc453agpe"/><rect class="ih4p9ndmu"/>`,
		"fallback": "arcticons:bring",
	});
}

export default Component;
