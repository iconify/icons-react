import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cqx30hb8s {
  fill: currentColor;
  d: path("m237.68 85.43l-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57M220 139.91L197.88 128L220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128L128 117.63L147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128L36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z");
}
</style><path class="cqx30hb8s"/>`,
		"fallback": "ph:codepen-logo-bold",
	});
}

export default Component;
