import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.akxgitb1p {
  fill: currentColor;
  d: path("M4 6a4 4 0 1 1 8 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V6A5 5 0 0 0 3 6v5a3 3 0 0 0 3 3h.585a1.5 1.5 0 1 0 0-1H6a2 2 0 0 1-2-2h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm8 1v2a1 1 0 0 1-1 1h-1V7zm-6 3H4V7h2zm1.5 3.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0");
}
</style><path class="akxgitb1p"/>`,
		"fallback": "fluent:headset-16-regular",
	});
}

export default Component;
