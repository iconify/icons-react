import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htnnp5_fy {
  fill: currentColor;
  d: path("M15.5 7A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7zm-5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 0 0 1H16a.5.5 0 0 0 0-1zM9.65 2.086a2.5 2.5 0 0 1 3.061 1.768L13.286 6H9.5A3.5 3.5 0 0 0 6 9.5v4.846a2.5 2.5 0 0 1-2.361-1.85L2.086 6.7a2.5 2.5 0 0 1 1.768-3.06zM10.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m3 0a.5.5 0 1 0 0 1H16a.5.5 0 0 0 0-1z");
}
</style><path class="htnnp5_fy"/>`,
		"fallback": "fluent:form-multiple-collection-20-filled",
	});
}

export default Component;
