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
		"content": `<style>.kd-aaob3a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.875 1.75H5.125q-3.375 0-3.375 3.375v6.75q0 3.375 3.375 3.375h.125v1.56q-2 .345-2 2.69q0 2.75 2.75 2.75t2.75-2.75q0-2.345-2-2.69v-1.56h10.5v1.56q-2 .345-2 2.69q0 2.75 2.75 2.75t2.75-2.75q0-2.345-2-2.69v-1.56h.125q3.375 0 3.375-3.375v-6.75q0-3.375-3.375-3.375");
}
</style><path class="kd-aaob3a"/>`,
		"fallback": "uix-solid:cricket-sight-screen",
	});
}

export default Component;
