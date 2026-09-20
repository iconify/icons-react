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
		"content": `<style>.tuzj1fbuv {
  fill: currentColor;
  d: path("M4 20v-1l4.77-.917L9.807 4h4.384l1.039 14.083L20 19v1zm6.808-1.827h2.384V5h-2.384z");
}
</style><path class="tuzj1fbuv"/>`,
		"fallback": "material-symbols-light:bike-dock-outline-sharp",
	});
}

export default Component;
