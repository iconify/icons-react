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
		"content": `<style>.b1o_r7a_r {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.81L9.195 6H4zm0 0V6zm10.5-2.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="b1o_r7a_r"/>`,
		"fallback": "material-symbols-light:create-new-folder-outline-sharp",
	});
}

export default Component;
