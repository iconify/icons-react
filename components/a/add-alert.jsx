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
		"content": `<style>.wje_mib3g {
  fill: currentColor;
  d: path("M5 18.77v-1h1.616V9.845q0-1.96 1.24-3.447T11 4.546V4q0-.417.291-.708q.291-.292.707-.292t.709.292T13 4v.546q1.904.365 3.144 1.853t1.24 3.447v7.923H19v1zm6.997 2.615q-.668 0-1.14-.475t-.472-1.14h3.23q0 .67-.475 1.142q-.476.472-1.143.472m-.497-6.768h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="wje_mib3g"/>`,
		"fallback": "material-symbols-light:add-alert",
	});
}

export default Component;
