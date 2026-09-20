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
		"content": `<style>.k43qjacfn {
  fill: currentColor;
  d: path("M17.466 22.002a3.502 3.502 0 0 1-6.932 0zM14 3a8.5 8.5 0 0 1 8.497 8.246v.255h.004v4.112l1.414 3.644q.057.148.077.306l.01.157a1.28 1.28 0 0 1-1.15 1.274l-.13.006H5.275a1.28 1.28 0 0 1-1.235-1.62l.042-.124l1.416-3.644v-4.11A8.5 8.5 0 0 1 14 3");
}
</style><path class="k43qjacfn"/>`,
		"fallback": "fluent:alert-28-filled",
	});
}

export default Component;
