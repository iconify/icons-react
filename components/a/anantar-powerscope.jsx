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
		"content": `<style>.wobyo7b6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l-6.15-6.15a8.698 8.698 0 1 0 0 12.3zm1.783-1.783l4.368-4.368a8.698 8.698 0 1 1 0 12.302l-4.368-4.368");
}
</style><path class="wobyo7b6j"/>`,
		"fallback": "arcticons:anantar-powerscope",
	});
}

export default Component;
