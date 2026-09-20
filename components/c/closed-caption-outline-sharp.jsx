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
		"content": `<style>.t-a07ra8x {
  fill: currentColor;
  d: path("M4 19V5h16v14zm1-1h14V6H5zm1.692-3.308h4.385v-1.461h-.885v.577H7.577v-3.616h2.615v.616h.885v-1.5H6.692zm6.231 0h4.385v-1.461h-.885v.577h-2.615v-3.616h2.615v.616h.885v-1.5h-4.385zM5 18V6z");
}
</style><path class="t-a07ra8x"/>`,
		"fallback": "material-symbols-light:closed-caption-outline-sharp",
	});
}

export default Component;
