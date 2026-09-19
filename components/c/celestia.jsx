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
		"content": `<style>.bsn60jbjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.52 10.964a15.05 15.05 0 1 0 0 26.066l9.42.206a21.499 21.499 0 1 1 0-26.472Z");
}

.ko4415bth {
  cx: 23.939px;
  cy: 23.943px;
  r: 10.749px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="bsn60jbjf"/><circle class="ko4415bth"/>`,
		"fallback": "arcticons:celestia",
	});
}

export default Component;
