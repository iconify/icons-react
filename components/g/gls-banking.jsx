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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.zfj0te1mw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.323 22.117a3.895 3.895 0 0 0-3.878-3.912h-.033h0a3.895 3.895 0 0 0-3.912 3.878v3.945c0 2.174 1.739 3.767 3.912 3.767h0c2.173 0 3.911-1.739 3.911-3.767h-3.911m15.554 2.463c.725.87 1.593 1.304 2.897 1.304h1.74a2.906 2.906 0 0 0 2.897-2.897h0A2.906 2.906 0 0 0 34.602 24H32.72a2.906 2.906 0 0 1-2.898-2.898h0a2.906 2.906 0 0 1 2.898-2.897h1.739c1.303 0 2.173.29 2.896 1.304m-15.742-1.304v11.59h5.795");
}
</style><path class="zfj0te1mw"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:gls-banking",
	});
}

export default Component;
