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
		"content": `<style>.yj-bz14fi {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-3.78V19h14V9.596L13.242 16l-4.011-4.011zm0-1.428l4.23-4.23l3.99 3.988L19 8.096V5H5zm0-5.196v-1.5v6.454v-3.988v5.657v-4.23V16zm0 5.196V5v9.55v-3.988zm0 1.427v-4.23V16V9.596V19z");
}
</style><path class="yj-bz14fi"/>`,
		"fallback": "material-symbols-light:bid-landscape-outline-sharp",
	});
}

export default Component;
