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
		"content": `<style>.sv-s6pbil {
  fill: currentColor;
  d: path("M6.027 21L4 3h16l-2.008 18zm.614-3.5l.282 2.5h10.173l.283-2.5zm-.104-1h10.952L18.866 4H5.116zM6.64 20h10.738z");
}
</style><path class="sv-s6pbil"/>`,
		"fallback": "material-symbols-light:glass-cup-outline-sharp",
	});
}

export default Component;
