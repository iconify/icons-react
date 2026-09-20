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
		"content": `<style>.vz7wq2blv {
  fill: currentColor;
  d: path("M1 3.5A1.5 1.5 0 0 1 2.5 2h11A1.5 1.5 0 0 1 15 3.5v3A1.5 1.5 0 0 1 13.5 8h-11A1.5 1.5 0 0 1 1 6.5zM2.5 3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 11.5A1.5 1.5 0 0 1 2.5 10h3A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-3A1.5 1.5 0 0 1 1 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm8-1A1.5 1.5 0 0 0 9 11.5v1a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5zm-.5 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z");
}
</style><path class="vz7wq2blv"/>`,
		"fallback": "fluent:broad-activity-feed-16-regular",
	});
}

export default Component;
