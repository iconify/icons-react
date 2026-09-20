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
		"content": `<style>.j3_ygnjak {
  fill: currentColor;
  d: path("M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.806-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM3 19V5h6.596l2 2H21v12zm1-1V6z");
}
</style><path class="j3_ygnjak"/>`,
		"fallback": "material-symbols-light:folder-zip-outline-sharp",
	});
}

export default Component;
