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
		"content": `<style>.ajeb0yitx {
  fill: currentColor;
  d: path("M12 3a.75.75 0 0 1 .743.648l.007.102v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75A.75.75 0 0 1 12 3M8.255 6a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75m7.49 0a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75M4.75 9a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102L4 14.25v-4.5A.75.75 0 0 1 4.75 9m14.501 0a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.101l-.007-.101V9.75a.75.75 0 0 1 .75-.75");
}
</style><path class="ajeb0yitx"/>`,
		"fallback": "fluent:device-eq-24-regular",
	});
}

export default Component;
