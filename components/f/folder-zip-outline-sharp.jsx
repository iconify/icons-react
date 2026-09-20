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
		"content": `<style>.syb7uxo2i {
  fill: currentColor;
  d: path("M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.825-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM2 20V4h8l2 2h10v14zm2-2V6z");
}
</style><path class="syb7uxo2i"/>`,
		"fallback": "material-symbols:folder-zip-outline-sharp",
	});
}

export default Component;
