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
		"content": `<style>.g6a-g8bux {
  fill: currentColor;
  d: path("M23.25 4a.75.75 0 0 1 .743.648L24 4.75v8a.75.75 0 0 1-1.493.102l-.007-.102V6.56L6.56 22.5h6.19a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L12.75 24h-8a.75.75 0 0 1-.743-.648L4 23.25v-8a.75.75 0 0 1 1.493-.102l.007.102v6.189L21.439 5.5H15.25a.75.75 0 0 1-.743-.648L14.5 4.75a.75.75 0 0 1 .648-.743L15.25 4z");
}
</style><path class="g6a-g8bux"/>`,
		"fallback": "fluent:arrow-maximize-28-regular",
	});
}

export default Component;
