import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oy-7-9bck {
  fill: currentColor;
  d: path("M5.385 14.692h.884v-2.076h3.5V9.308H5.385zm5.98 0h.885V9.308h-.885zm2.866 0h.827V10.77l2.704 3.923h.854V9.308h-.827v3.923l-2.655-3.923h-.903zm-7.962-2.961v-1.539h2.616v1.539zM3 19V5h18v14z");
}
</style><path class="oy-7-9bck"/>`,
		"fallback": "material-symbols-light:fiber-pin-sharp",
	});
}

export default Component;
