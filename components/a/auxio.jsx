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
		"content": `<style>.qvolz4b2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.839 13.745L26.545 3.5v33.352L18.831 44.5l-7.67-7.648l7.67-7.707");
}
</style><path class="qvolz4b2k"/>`,
		"fallback": "arcticons:auxio",
	});
}

export default Component;
