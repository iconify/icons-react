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
		"content": `<style>.ol8z6hmxl {
  fill: currentColor;
  d: path("M16 17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5H4a1.002 1.002 0 0 1-.707-1.707l8-8a1 1 0 0 1 1.414 0l8 8A1 1 0 0 1 20 12h-4Zm-1 3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="ol8z6hmxl"/>`,
		"fallback": "coolicons:caps-lock-fill-sharp",
	});
}

export default Component;
