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
		"content": `<style>.p8aty-yxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34 24l-16-9.238v18.476z");
}

.zc7hhleka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 8.797c8.397-8.396 22.01-8.396 30.406 0s8.396 22.01 0 30.406s-22.01 8.396-30.406 0");
}
</style><path class="zc7hhleka"/><path class="p8aty-yxu"/>`,
		"fallback": "arcticons:dr-tv",
	});
}

export default Component;
