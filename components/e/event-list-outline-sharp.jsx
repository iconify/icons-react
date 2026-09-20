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
		"content": `<style>.w0v93qb4p {
  fill: currentColor;
  d: path("M14.616 20v-6.384H21V20zm1-1H20v-4.384h-4.384zM3 17.308v-1h8.23v1zm11.616-6.924V4H21v6.385zm1-1H20V5h-4.384zM3 7.692v-1h8.23v1zm14.808-.5");
}
</style><path class="w0v93qb4p"/>`,
		"fallback": "material-symbols-light:event-list-outline-sharp",
	});
}

export default Component;
