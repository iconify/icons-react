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
		"content": `<style>.cmq54xbuj {
  fill: currentColor;
  d: path("M10 23v-9H1L11 4h9v9zm6-8.825l2-2V6h-6.175l-2 2H16zm-4 4l2-2V10H7.825l-2 2H12z");
}
</style><path class="cmq54xbuj"/>`,
		"fallback": "material-symbols:azm-outline-sharp",
	});
}

export default Component;
