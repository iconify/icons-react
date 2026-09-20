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
		"content": `<style>.ux97lybpz {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7m8.5 0a.75.75 0 0 1 .743.648L17 7.75v8.5a.75.75 0 0 1-1.493.102l-.007-.102v-8.5a.75.75 0 0 1 .75-.75M12 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102l-.007-.102v-8.5A.75.75 0 0 1 12 7");
}
</style><path class="ux97lybpz"/>`,
		"fallback": "fluent:calendar-3-day-24-regular",
	});
}

export default Component;
