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
		"content": `<style>.x11075bjs {
  fill: currentColor;
  d: path("M6.064 5.244a.75.75 0 1 0-1.128-.988l-1.75 2a.75.75 0 0 0 0 .988l1.75 2a.75.75 0 0 0 1.128-.988L5.403 7.5h2.862a.75.75 0 0 0 0-1.5H5.403zm11.957-1.058a.75.75 0 0 0-.07 1.058l.66.756h-2.86a.75.75 0 0 0 0 1.5h2.86l-.66.756a.75.75 0 0 0 1.128.988l1.75-2a.75.75 0 0 0 0-.988l-1.75-2a.75.75 0 0 0-1.058-.07M5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11zM6 15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75");
}
</style><path class="x11075bjs"/>`,
		"fallback": "fluent:arrow-autofit-content-24-filled",
	});
}

export default Component;
