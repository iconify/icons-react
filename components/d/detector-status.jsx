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
		"content": `<style>.tgd-tbbum {
  fill: currentColor;
  d: path("m8.1 8l.3 1h7.2l.3-1zm.3 3q-.65 0-1.175-.387T6.5 9.6L6 8H5q-.825 0-1.412-.587T3 6V3h18v3q0 .825-.587 1.413T19 8h-1l-.65 1.7q-.225.575-.725.938T15.5 11zm2.55 10L7.4 17.45l1.425-1.4l2.125 2.125l4.225-4.25L16.6 15.35z");
}
</style><path class="tgd-tbbum"/>`,
		"fallback": "material-symbols:detector-status",
	});
}

export default Component;
