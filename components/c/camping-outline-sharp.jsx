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
		"content": `<style>.x64oob5pn {
  fill: currentColor;
  d: path("M3 21.5v-3.842l8.385-11.281l-1.135-1.504l.812-.604L12 5.548l.958-1.279l.792.604l-1.115 1.504L21 17.657V21.5zm9-14.275L4 17.981V20.5h3.25L12 13.866l4.75 6.634H20v-2.52zM8.489 20.5h7.023L12 15.585zM12 13.866l4.75 6.634zL7.25 20.5z");
}
</style><path class="x64oob5pn"/>`,
		"fallback": "material-symbols-light:camping-outline-sharp",
	});
}

export default Component;
