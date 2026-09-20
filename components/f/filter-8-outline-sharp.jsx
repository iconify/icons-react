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
		"content": `<style>.o1_ufvban {
  fill: currentColor;
  d: path("m11.5 10l-.5.5v4h5v-4l-.5-.5l.5-.5v-4h-5v4zM15 6.5v3h-3v-3zm0 4v3h-3v-3zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="o1_ufvban"/>`,
		"fallback": "material-symbols-light:filter-8-outline-sharp",
	});
}

export default Component;
