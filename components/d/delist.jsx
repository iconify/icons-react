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
		"content": `<style>.zxmq4i3ui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.284 9.855l8.89 5.176L35.56 4.5M12 14.228l10.797 10.441l8.538-4.64M36 23.509L25.438 33.683l-9.154-5.087M12 33.148L22.709 43.5l8.626-5.176");
}
</style><path class="zxmq4i3ui"/>`,
		"fallback": "arcticons:delist",
	});
}

export default Component;
