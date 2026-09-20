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
		"content": `<style>.aii9dtpbq {
  fill: currentColor;
  d: path("M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5zM5 9.615h14V6H5zm0 0V6z");
}
</style><path class="aii9dtpbq"/>`,
		"fallback": "material-symbols-light:calendar-today-outline-sharp",
	});
}

export default Component;
