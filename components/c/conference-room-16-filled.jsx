import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptdy6ac_u {
  fill: currentColor;
  d: path("M7.183 2.113a.5.5 0 0 1 .415-.103l5 1A.5.5 0 0 1 13 3.5v8.997a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.598-.49V2.5m3 5.498a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M6 3H3.5a.5.5 0 0 0-.5.5v8.997a.5.5 0 0 0 .5.5H6zm1.183-.887A.5.5 0 0 0 7 2.5Z");
}
</style><path class="ptdy6ac_u"/>`,
		"fallback": "fluent:conference-room-16-filled",
	});
}

export default Component;
