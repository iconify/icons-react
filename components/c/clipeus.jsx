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
		"content": `<style>.bcwx_zbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.793 31.793L16.207 16.207");
}

.v9cca2fby {
  width: 34.383px;
  height: 22.041px;
  x: 6.808px;
  y: 12.98px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.5px;
  ry: 3.5px;
}
</style><rect transform="rotate(-45 24 24)" class="v9cca2fby"/><path class="bcwx_zbtp"/>`,
		"fallback": "arcticons:clipeus",
	});
}

export default Component;
