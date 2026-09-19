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
		"content": `<style>.c4hipffst {
  cx: 21.098px;
  cy: 26.902px;
  r: 17.365px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.sqh8d-abj {
  cx: 18.533px;
  cy: 29.467px;
  r: 13.879px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wkcz4_l2z {
  cx: 16.259px;
  cy: 31.741px;
  r: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="c4hipffst"/><circle class="sqh8d-abj"/><circle class="wkcz4_l2z"/>`,
		"fallback": "arcticons:alertus",
	});
}

export default Component;
