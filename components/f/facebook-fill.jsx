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
		"content": `<style>.eptx6fbea {
  fill: currentColor;
  d: path("M6 10a1 1 0 0 1 1-1h2V8a6 6 0 0 1 6-6h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v1h3a.998.998 0 0 1 .97 1.243l-1 4A1 1 0 0 1 17 15h-2v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6H7a1 1 0 0 1-1-1Z");
}
</style><path class="eptx6fbea"/>`,
		"fallback": "coolicons:facebook-fill",
	});
}

export default Component;
