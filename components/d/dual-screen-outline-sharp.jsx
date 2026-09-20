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
		"content": `<style>.ru4lk2pcr {
  fill: currentColor;
  d: path("m6 17.6l6 2.4V6.4L6 4zm-2 1.35V2h2l8 3.025V22.95zm8 .05v-2h6V4H6V2h14v17zm-6-1.4V4z");
}
</style><path class="ru4lk2pcr"/>`,
		"fallback": "material-symbols:dual-screen-outline-sharp",
	});
}

export default Component;
