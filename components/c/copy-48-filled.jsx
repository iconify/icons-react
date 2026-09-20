import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gqoapcb6h {
  fill: currentColor;
  d: path("M17 27.75A8.25 8.25 0 0 0 25.25 36h3.744a6.25 6.25 0 0 1-6.244 6h-10.5A6.25 6.25 0 0 1 6 35.75v-15.5A6.25 6.25 0 0 1 12.25 14H17zM35.75 6A6.25 6.25 0 0 1 42 12.25v15.5A6.25 6.25 0 0 1 35.75 34h-10.5A6.25 6.25 0 0 1 19 27.75v-15.5A6.25 6.25 0 0 1 25.25 6z");
}
</style><path class="gqoapcb6h"/>`,
		"fallback": "fluent:copy-48-filled",
	});
}

export default Component;
