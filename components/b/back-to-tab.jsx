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
		"content": `<style>.gafa07brw {
  fill: currentColor;
  d: path("M9.525 12.239L4 6.714v3.902H3V5h5.616v1H4.689l5.55 5.525zM4.615 19q-.69 0-1.153-.462T3 17.384V13h1v4.385q0 .269.173.442t.443.173h7.153v1zM20 12.77V6.615q0-.27-.173-.443T19.385 6H11V5h8.385q.69 0 1.153.463T21 6.616v6.153zm1 2.384V19h-6.846v-3.846z");
}
</style><path class="gafa07brw"/>`,
		"fallback": "material-symbols-light:back-to-tab",
	});
}

export default Component;
