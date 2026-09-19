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
		"content": `<style>.aqljibbxb {
  cx: 36.629px;
  cy: 19.377px;
  r: 6.871px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fy7gm4ujj {
  cx: 32.394px;
  cy: 27.987px;
  r: 9.494px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t4b659o-m {
  cx: 24px;
  cy: 24px;
  r: 15.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v1xj1aczo {
  cx: 14.965px;
  cy: 26.55px;
  r: 10.465px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="t4b659o-m"/><circle class="v1xj1aczo"/><circle class="fy7gm4ujj"/><circle class="aqljibbxb"/>`,
		"fallback": "arcticons:cloud-mimedia",
	});
}

export default Component;
