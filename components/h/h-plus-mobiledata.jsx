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
		"content": `<style>.u-kve-brd {
  fill: currentColor;
  d: path("M4.616 17V7h1v4.5h7V7h1v10h-1v-4.5h-7V17zm13.769-2.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="u-kve-brd"/>`,
		"fallback": "material-symbols-light:h-plus-mobiledata",
	});
}

export default Component;
