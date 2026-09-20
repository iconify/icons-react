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
		"content": `<style>.u34wozy8c {
  fill: currentColor;
  d: path("M14.75 16.192h.885v-1.5h1.75V9.308H13v5.384h1.75zm-8.135-1.5H7.5v-2h2.616v2H11V9.308h-.885v2.5H7.5v-2.5h-.885zm7.27-.884v-3.616H16.5v3.616zM3 19V5h18v14z");
}
</style><path class="u34wozy8c"/>`,
		"fallback": "material-symbols-light:high-quality-sharp",
	});
}

export default Component;
