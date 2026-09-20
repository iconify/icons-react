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
		"content": `<style>.t1nbmgewq {
  fill: currentColor;
  d: path("M5.616 16.462H6.5v-1.577h11v1.577h.885v-5.385h-.75V8.231H6.365v2.846h-.75zm6.826-5.385V9.116h4.308v1.961zm-5.192 0V9.116h4.308v1.961zM6.5 14v-2h11v2zM3 21V3h18v18zm1-1h16V4H4zm0 0V4z");
}
</style><path class="t1nbmgewq"/>`,
		"fallback": "material-symbols-light:bedroom-parent-outline-sharp",
	});
}

export default Component;
