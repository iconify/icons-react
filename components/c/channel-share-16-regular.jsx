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
		"content": `<style>.tygsex8rp {
  fill: currentColor;
  d: path("M1 3.5A2.5 2.5 0 0 1 3.5 1h4A2.5 2.5 0 0 1 10 3.5V4H9v-.5A1.5 1.5 0 0 0 7.5 2h-4A1.5 1.5 0 0 0 2 3.5v4A1.5 1.5 0 0 0 3.5 9h5.585a1.5 1.5 0 1 1 0 1H3.5A2.5 2.5 0 0 1 1 7.5zm9 6a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0M6 11v.5A2.5 2.5 0 0 0 8.5 14h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12.5 5H6.915a1.5 1.5 0 1 0 0 1H12.5A1.5 1.5 0 0 1 14 7.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 7 11.5V11zm-.5-6a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="tygsex8rp"/>`,
		"fallback": "fluent:channel-share-16-regular",
	});
}

export default Component;
