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
		"content": `<style>.p1sdyd2_h {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm11.5-3.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="p1sdyd2_h"/>`,
		"fallback": "material-symbols-light:create-new-folder-sharp",
	});
}

export default Component;
