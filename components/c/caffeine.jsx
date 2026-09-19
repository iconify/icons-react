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
		"content": `<style>.efrpdw-8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.882 7.132h4.353a3.265 3.265 0 0 1 3.265 3.265v6.53a3.265 3.265 0 0 1-3.265 3.264h-4.353M5.5 40.868h37");
}

.h8jwz9bct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.765 7.132h26.117v21.765a7.62 7.62 0 0 1-7.617 7.618H13.118A7.62 7.62 0 0 1 5.5 28.897v-18.5a3.266 3.266 0 0 1 3.265-3.265");
}
</style><path class="h8jwz9bct"/><path class="efrpdw-8e"/>`,
		"fallback": "arcticons:caffeine",
	});
}

export default Component;
