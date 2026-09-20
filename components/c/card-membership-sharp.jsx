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
		"content": `<style>.haa-tn25v {
  fill: currentColor;
  d: path("M3 3h18v13h-6.077v4.27L12 18.807l-2.923 1.461V16H3zm1 9.577h16v-2.154H4z");
}
</style><path class="haa-tn25v"/>`,
		"fallback": "material-symbols-light:card-membership-sharp",
	});
}

export default Component;
