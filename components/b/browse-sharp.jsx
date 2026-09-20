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
		"content": `<style>.enx-1jbqb {
  fill: currentColor;
  d: path("M4 20v-5h7v5zm9 0v-9h7v9zm-9-7V4h7v9zm9-4V4h7v5z");
}
</style><path class="enx-1jbqb"/>`,
		"fallback": "material-symbols-light:browse-sharp",
	});
}

export default Component;
