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
		"content": `<style>.nt26nvadq {
  fill: currentColor;
  d: path("M6.77 11.116V6.769h4.346v4.347zm0 6.115v-4.347h4.346v4.347zm6.115-6.116V6.77h4.346v4.347zm0 6.116v-4.347h4.346v4.347zM4 20V4h16v16zm1-1h14V5H5z");
}
</style><path class="nt26nvadq"/>`,
		"fallback": "material-symbols-light:cards-sharp",
	});
}

export default Component;
