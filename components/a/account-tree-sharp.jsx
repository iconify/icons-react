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
		"content": `<style>.u4fkknl6y {
  fill: currentColor;
  d: path("M15 21v-3h-4V8H9v3H2V3h7v3h6V3h7v8h-7V8h-2v8h2v-3h7v8z");
}
</style><path class="u4fkknl6y"/>`,
		"fallback": "material-symbols:account-tree-sharp",
	});
}

export default Component;
