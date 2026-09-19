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

.dff2lqqct {
  cx: 24px;
  cy: 24px;
  r: 15.357px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j_evs0bva {
  cx: 24px;
  cy: 24px;
  r: 3.071px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzm6z5d_g {
  cx: 24px;
  cy: 24px;
  r: 9.214px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="dff2lqqct"/><circle class="zzm6z5d_g"/><circle class="j_evs0bva"/>`,
		"fallback": "arcticons:go2bank",
	});
}

export default Component;
