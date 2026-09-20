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
		"content": `<style>.vrlri9buw {
  fill: currentColor;
  d: path("M2.5 2A1.5 1.5 0 0 0 1 3.5v3A1.5 1.5 0 0 0 2.5 8h11A1.5 1.5 0 0 0 15 6.5v-3A1.5 1.5 0 0 0 13.5 2zm0 8A1.5 1.5 0 0 0 1 11.5v1A1.5 1.5 0 0 0 2.5 14h3A1.5 1.5 0 0 0 7 12.5v-1A1.5 1.5 0 0 0 5.5 10zm8 0A1.5 1.5 0 0 0 9 11.5v1a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="vrlri9buw"/>`,
		"fallback": "fluent:broad-activity-feed-16-filled",
	});
}

export default Component;
