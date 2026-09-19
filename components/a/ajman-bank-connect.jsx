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
		"content": `<style>.bo4x37bwj {
  cx: 31.5px;
  cy: 24px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.erscrub_v {
  cx: 24px;
  cy: 31.5px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.io5tdnd-j {
  cx: 16.5px;
  cy: 24px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u-kpwsbrz {
  cx: 24px;
  cy: 16.5px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="io5tdnd-j"/><circle class="bo4x37bwj"/><circle class="u-kpwsbrz"/><circle class="erscrub_v"/>`,
		"fallback": "arcticons:ajman-bank-connect",
	});
}

export default Component;
