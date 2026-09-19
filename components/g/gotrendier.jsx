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
		"content": `<style>.m52jk0bod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.706 19.5a9 9 0 1 1 .08 9.135l-5.572-9.27");
}

.n-_pwbbkt {
  cx: 13.5px;
  cy: 24px;
  r: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="n-_pwbbkt"/><path class="m52jk0bod"/>`,
		"fallback": "arcticons:gotrendier",
	});
}

export default Component;
