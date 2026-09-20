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
		"content": `<style>.m3m4ct8kf {
  fill: currentColor;
  d: path("M6.5 2a.5.5 0 0 0 0 1h5A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5a.5.5 0 0 0 0 1h5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm3.354 5.646l-3-3a.5.5 0 1 0-.708.708L8.293 7.5H1.5a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="m3m4ct8kf"/>`,
		"fallback": "fluent:arrow-enter-16-regular",
	});
}

export default Component;
