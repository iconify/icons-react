import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mi7raqb4u {
  fill: currentColor;
  d: path("M216 100h-83.08l78.14-20.63a12 12 0 0 0 8.52-14.75l-8.16-30a19.94 19.94 0 0 0-24.3-13.95L34.79 60.87a19.74 19.74 0 0 0-12.14 9.27a19.48 19.48 0 0 0-1.95 15L28 112v88a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-88a12 12 0 0 0-12-12m-91.11-38.09l18.29 10.56l-25.95 6.85l-18.29-10.56Zm64.45-17l3.91 14.35l-17.13 4.52l-18.29-10.57ZM66 77.46L84.29 88l-35.4 9.35L45 83ZM204 196H52v-72h152Z");
}
</style><path class="mi7raqb4u"/>`,
		"fallback": "ph:film-slate-bold",
	});
}

export default Component;
