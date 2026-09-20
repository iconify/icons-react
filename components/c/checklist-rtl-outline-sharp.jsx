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
		"content": `<style>.m0ga-wu0d {
  fill: currentColor;
  d: path("m16.106 17.904l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zm0-7.231l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zM3 16.116v-1h8v1zm0-7.231v-1h8v1z");
}
</style><path class="m0ga-wu0d"/>`,
		"fallback": "material-symbols-light:checklist-rtl-outline-sharp",
	});
}

export default Component;
