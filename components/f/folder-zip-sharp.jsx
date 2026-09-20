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
		"content": `<style>.hinnpcz4o {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm11-1h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2z");
}
</style><path class="hinnpcz4o"/>`,
		"fallback": "material-symbols-light:folder-zip-sharp",
	});
}

export default Component;
