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
		"content": `<style>.my8z-jbha {
  fill: currentColor;
  d: path("M5 21V3h9.5L19 7.5v7h-1V8h-4V4H6v16h9.5v1zm16.95.664l-3.45-3.45v2.955h-1V16.5h4.67v1h-2.982l3.45 3.45zM6 20V4z");
}
</style><path class="my8z-jbha"/>`,
		"fallback": "material-symbols-light:file-open-outline-sharp",
	});
}

export default Component;
