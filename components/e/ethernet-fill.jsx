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
		"content": `<style>.ljrg8ablw {
  fill: currentColor;
  d: path("M19 18h-1v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3M7 8a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 3V8a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m4-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Z");
}
</style><path class="ljrg8ablw"/>`,
		"fallback": "coolicons:ethernet-fill",
	});
}

export default Component;
