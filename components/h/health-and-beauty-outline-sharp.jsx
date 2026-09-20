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
		"content": `<style>.raz8wcc1v {
  fill: currentColor;
  d: path("M5 22L1 11l5-3V2h4v6l5 3l-4 11zm11 0v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4V8h4V6h-4V4h7v18zm-9.6-2h3.2l2.95-8.15L9.45 10h-2.9l-3.1 1.85zM8 15");
}
</style><path class="raz8wcc1v"/>`,
		"fallback": "material-symbols:health-and-beauty-outline-sharp",
	});
}

export default Component;
