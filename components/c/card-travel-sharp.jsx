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
		"content": `<style>.jggx_ob-x {
  fill: currentColor;
  d: path("M3 20V7h5V3.77h8V7h5v13zM9 7h6V4.77H9zm-5 9.577h16v-2.154H4z");
}
</style><path class="jggx_ob-x"/>`,
		"fallback": "material-symbols-light:card-travel-sharp",
	});
}

export default Component;
