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

.marqlvbue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.963 15.89v16.22M36.5 15.89v16.22m-10.537-8.14H36.5m-14.463-2.707c0-2.967-2.358-5.373-5.268-5.373S11.5 18.296 11.5 21.263v5.474c0 2.967 2.359 5.373 5.269 5.373s5.268-2.406 5.268-5.373H16.77");
}
</style><path class="marqlvbue"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:gh-drivers",
	});
}

export default Component;
