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
		"content": `<style>.h5adadbye {
  fill: currentColor;
  d: path("M8.6 15.87L4.73 12L8.6 8.13l.708.72L6.158 12l3.15 3.15zM6 17h1v1.5h10V17h1v5H6zM7 7H6V2h12v5h-1V5.5H7zm8.4 8.87l-.708-.72l3.15-3.15l-3.15-3.15l.708-.72L19.27 12z");
}
</style><path class="h5adadbye"/>`,
		"fallback": "material-symbols-light:developer-mode-sharp",
	});
}

export default Component;
