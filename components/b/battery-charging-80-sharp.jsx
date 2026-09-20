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
		"content": `<style>.isjh5cc5h {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-2.135.275-3.587 1.898t-1.452 3.852q0 .843.227 1.618t.663 1.44zm1-10.77h6.23V5.463h-6.23zm7.692 11.25v-2.634h-1.539l2.385-4.327v2.635h1.539z");
}
</style><path class="isjh5cc5h"/>`,
		"fallback": "material-symbols-light:battery-charging-80-sharp",
	});
}

export default Component;
