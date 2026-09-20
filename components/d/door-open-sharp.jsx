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
		"content": `<style>.nua-dbf-u {
  fill: currentColor;
  d: path("M4.462 20v-1H6V3.5h12V19h1.539v1zM15 19h2V4.5h-2zm-3.46-6.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="nua-dbf-u"/>`,
		"fallback": "material-symbols-light:door-open-sharp",
	});
}

export default Component;
