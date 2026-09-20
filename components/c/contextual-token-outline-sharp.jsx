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
		"content": `<style>.o0je-vb4s {
  fill: currentColor;
  d: path("M6 16h7v-3H6zm9 0h3V8h-3zm-9-5h7V8H6zm-2 7h16V6H4zm-2 2V4h20v16zm2-2V6z");
}
</style><path class="o0je-vb4s"/>`,
		"fallback": "material-symbols:contextual-token-outline-sharp",
	});
}

export default Component;
