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
		"content": `<style>.j5r1gsbof {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20v-3h16v3q0 .825-.587 1.413T18 22zm7-13h5l-5-5zm-4 6v-2h6v2zm8 0v-2h6v2zM1 15v-2h6v2zm3-4V4q0-.825.588-1.412T6 2h8l6 6v3z");
}
</style><path class="j5r1gsbof"/>`,
		"fallback": "material-symbols:insert-page-break",
	});
}

export default Component;
