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
		"content": `<style>.w958mfb2v {
  fill: currentColor;
  d: path("M13.654 21v-2.21l5.96-5.934l2.19 2.204l-5.94 5.94zm6.885-5.94l-.926-.945zm-6 5.056h.95l3.467-3.474l-.45-.494l-.475-.47l-3.493 3.488zM5 21V3h9.5L19 7.5v2.596h-1V8h-4V4H6v16h5.27v1zm13.506-4.852l-.475-.47l.925.964z");
}
</style><path class="w958mfb2v"/>`,
		"fallback": "material-symbols-light:edit-document-outline-sharp",
	});
}

export default Component;
