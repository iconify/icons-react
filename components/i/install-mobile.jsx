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
		"content": `<style>.sqbiz25ap {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h7v5H7v12h10v-2h2v5q0 .825-.587 1.413T17 23zm11-9l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9z");
}
</style><path class="sqbiz25ap"/>`,
		"fallback": "material-symbols:install-mobile",
	});
}

export default Component;
