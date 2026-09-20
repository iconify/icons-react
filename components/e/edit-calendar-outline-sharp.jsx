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
		"content": `<style>.n046ulnbl {
  fill: currentColor;
  d: path("M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v6.616h-1v-1H5V20h6.846v1zM5 9.615h14V6H5zm0 0V6zM14.23 21v-2.21l5.96-5.934l2.19 2.204L16.44 21zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="n046ulnbl"/>`,
		"fallback": "material-symbols-light:edit-calendar-outline-sharp",
	});
}

export default Component;
