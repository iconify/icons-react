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
		"content": `<style>.d98_h4w4a {
  fill: currentColor;
  d: path("M9.154 13.692h8.692l-2.758-3.653l-2.453 3.077l-1.589-1.885zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="d98_h4w4a"/>`,
		"fallback": "material-symbols-light:filter-sharp",
	});
}

export default Component;
