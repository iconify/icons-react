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
		"content": `<style>.i8ya0ibgm {
  fill: currentColor;
  d: path("M3 17v-2h5v-2H3v-2h5V9H3V7h7v10zm18-6v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z");
}
</style><path class="i8ya0ibgm"/>`,
		"fallback": "material-symbols:3g-mobiledata-outline-sharp",
	});
}

export default Component;
