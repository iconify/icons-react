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
		"content": `<style>.nkd-xrbxa {
  fill: currentColor;
  d: path("M5 5c0-1.265 1.076-2.164 2.298-2.167c.399-.001.793.092 1.149.273l8 4a2.116 2.116 0 0 1 0 3.788L7 15.618V21a1 1 0 0 1-2 0Z");
}
</style><path class="nkd-xrbxa"/>`,
		"fallback": "coolicons:flag-triangle-fill",
	});
}

export default Component;
