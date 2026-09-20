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
		"content": `<style>.hox0j2bwr {
  fill: currentColor;
  d: path("m10.95 17.62l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z");
}
</style><path class="hox0j2bwr"/>`,
		"fallback": "material-symbols-light:event-available-sharp",
	});
}

export default Component;
