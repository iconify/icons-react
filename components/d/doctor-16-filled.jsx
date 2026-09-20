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
		"content": `<style>.sv5_o3bwl {
  fill: currentColor;
  d: path("M6.5 1.766a1.5 1.5 0 0 0-1.5 1.5v1.75H3.5a1.5 1.5 0 0 0-1.5 1.5v2.985a1.5 1.5 0 0 0 1.5 1.5H5v1.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H11V3.266a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="sv5_o3bwl"/>`,
		"fallback": "fluent:doctor-16-filled",
	});
}

export default Component;
