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
		"content": `<style>.xvmpo9u_d {
  fill: currentColor;
  d: path("M6.789 21v-9.327H4V5h7.558v16zm7.519-7.327V3h.73q2.116 0 3.539 1.577T20 8.327t-1.423 3.76t-3.539 1.586z");
}
</style><path class="xvmpo9u_d"/>`,
		"fallback": "material-symbols-light:earbud-left-sharp",
	});
}

export default Component;
