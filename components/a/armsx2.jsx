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
		"content": `<style>.y_gxu5bhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.736 9.461L24 3.5l10.264 5.961M24 15.422l-10.264-5.96v29.077M24 44.5V15.423L34.264 9.46v29.08");
}
</style><path class="y_gxu5bhi"/>`,
		"fallback": "arcticons:armsx2",
	});
}

export default Component;
