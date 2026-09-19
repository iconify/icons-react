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
		"content": `<style>.id0k5fb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 12.007v23.975M7.433 12v23.951M11.24 12v23.951m6.162-23.91V35.99m2.168-23.947V35.99m3.527-23.947V35.99m1.954-23.947V35.99m3.91-23.947V35.99M15.666 12.042v23.947m16.657-23.935V36m1.967-23.946V36m4.121-23.952v23.95M42.5 12.05v23.852m-2.044-23.854v23.95");
}
</style><path class="id0k5fb-o"/>`,
		"fallback": "arcticons:bilka-scan-and-go",
	});
}

export default Component;
