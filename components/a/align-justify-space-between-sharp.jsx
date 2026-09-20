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
		"content": `<style>.e5348ebvt {
  fill: currentColor;
  d: path("M20 21v-4.5h-2v-9h2V3h1v18zM3 21V3h1v4.5h2v9H4V21z");
}
</style><path class="e5348ebvt"/>`,
		"fallback": "material-symbols-light:align-justify-space-between-sharp",
	});
}

export default Component;
