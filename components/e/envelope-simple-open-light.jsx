import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gntq6fb8d {
  fill: currentColor;
  d: path("m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5M128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83ZM216 202H40a2 2 0 0 1-2-2v-92.35l69.06 49.24a6.06 6.06 0 0 0 3.49 1.11h34.9a6.06 6.06 0 0 0 3.49-1.11L218 107.65V200a2 2 0 0 1-2 2");
}
</style><path class="gntq6fb8d"/>`,
		"fallback": "ph:envelope-simple-open-light",
	});
}

export default Component;
