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
		"content": `<style>.gbkzdtx5x {
  width: 28px;
  height: 39px;
  x: 10px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 14px;
  ry: 14px;
}

.ix3o-pb3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10 20.233h28M24 4.5v15.733");
}
</style><rect class="gbkzdtx5x"/><path class="ix3o-pb3e"/>`,
		"fallback": "arcticons:android-tv-adb-mouse",
	});
}

export default Component;
