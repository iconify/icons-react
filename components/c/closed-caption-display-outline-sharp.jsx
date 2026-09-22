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
		"content": `<style>.nsybbqpzd {
  fill: currentColor;
  d: path("M5 18V6zm1.692-8.692v5.384h3.25v-.884H7.577v-3.616h2.615v.616h.885v-1.5zm6.231 0V12.5h.885v-2.308h2.615v.616h.885v-1.5zM4 19V5h16v7.5h-1V6H5v12h4.942v1zm8.327 2v-6.115H21V21zm1-1H20v-4.115h-6.673z");
}
</style><path class="nsybbqpzd"/>`,
		"fallback": "material-symbols-light:closed-caption-display-outline-sharp",
	});
}

export default Component;
