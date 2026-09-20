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
		"content": `<style>.rf3vvccxc {
  fill: currentColor;
  d: path("M17.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 19V5h3.385V2.77h1.077V5h5.153V2.77h1V5H18v7.33q-.25-.016-.5-.016t-.5.017v-1.715H5V18h7.289q0 .25.017.5t.063.5zm1-9.385h12V6H5zm0 0V6z");
}
</style><path class="rf3vvccxc"/>`,
		"fallback": "material-symbols-light:calendar-add-on-outline-sharp",
	});
}

export default Component;
