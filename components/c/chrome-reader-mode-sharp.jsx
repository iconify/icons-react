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
		"content": `<style>.ckrbk0gmo {
  fill: currentColor;
  d: path("M2 20V4h20v16zm11-2h7V6h-7zm1-8h5V8.5h-5zm0 2.5h5V11h-5zm0 2.5h5v-1.5h-5z");
}
</style><path class="ckrbk0gmo"/>`,
		"fallback": "material-symbols:chrome-reader-mode-sharp",
	});
}

export default Component;
