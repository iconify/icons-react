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
		"content": `<style>.pr_uhabtu {
  fill: currentColor;
  d: path("M14.616 20v-6.384H21V20zM3 17.308v-1h8.23v1zm11.616-6.924V4H21v6.385zM3 7.692v-1h8.23v1z");
}
</style><path class="pr_uhabtu"/>`,
		"fallback": "material-symbols-light:event-list-sharp",
	});
}

export default Component;
