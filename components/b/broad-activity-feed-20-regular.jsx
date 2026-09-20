import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jd0r_m-vo {
  fill: currentColor;
  d: path("M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 8.5zM3.5 4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM2 13.5A1.5 1.5 0 0 1 3.5 12h4A1.5 1.5 0 0 1 9 13.5v2A1.5 1.5 0 0 1 7.5 17h-4A1.5 1.5 0 0 1 2 15.5zm1.5-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm9-1a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5zm-.5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z");
}
</style><path class="jd0r_m-vo"/>`,
		"fallback": "fluent:broad-activity-feed-20-regular",
	});
}

export default Component;
