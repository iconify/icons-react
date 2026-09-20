import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5zdvbjvu {
  fill: currentColor;
  d: path("M4.974 5.58A3.5 3.5 0 0 1 8.35 3h11.3a3.5 3.5 0 0 1 3.378 2.58l2.828 10.368C26.55 18.492 24.635 21 21.997 21h-9.995v-1.5h9.995a2.5 2.5 0 0 0 2.412-3.158L21.581 5.974a2 2 0 0 0-1.93-1.474h-11.3a2 2 0 0 0-1.93 1.474L5.323 10H4.25q-.253 0-.493.037zM11.992 24h8.26a.75.75 0 1 0 0-1.5h-8.25v1.25q0 .126-.01.25m-5.491-7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2 13.25A2.25 2.25 0 0 1 4.25 11h4.501a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 8.751 26h-4.5A2.25 2.25 0 0 1 2 23.75zm2.25-.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h4.501a.75.75 0 0 0 .75-.75v-10.5a.75.75 0 0 0-.75-.75z");
}
</style><path class="k5zdvbjvu"/>`,
		"fallback": "fluent:device-meeting-room-remote-28-regular",
	});
}

export default Component;
