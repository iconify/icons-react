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
		"content": `<style>.c98352bmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.366 15.517h31m-5.838 0l-15-7.676l-4.059 7.676m3.132 6.618h12.397v4.632H18.601zm1.809 2.316h6.397");
}

.db3ytvpeg {
  width: 31px;
  height: 39px;
  x: 9.366px;
  y: 5.106px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="db3ytvpeg"/><path class="c98352bmu"/>`,
		"fallback": "arcticons:digipost",
	});
}

export default Component;
