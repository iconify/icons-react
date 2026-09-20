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
		"content": `<style>.c35zo8p7a {
  fill: currentColor;
  d: path("M16.166 21.539L13.327 18.7l.689-.688l2.125 2.124l4.25-4.25l.688.714zM7.4 16.289l-.689-.689l1.6-1.6l-1.6-1.6l.689-.688l1.6 1.6l1.6-1.6l.689.688l-1.6 1.6l1.6 1.6l-.689.688l-1.6-1.6zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v7.33l-1 1.026v-2.74H5V20h5.692l1.033 1z");
}
</style><path class="c35zo8p7a"/>`,
		"fallback": "material-symbols-light:free-cancellation-sharp",
	});
}

export default Component;
