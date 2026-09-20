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
		"content": `<style>.abg5cejrw {
  fill: var(--svg-color--3c87c7, #3c87c7);
  d: path("m11.892 14.403l1.593 2.064l-4.635 3.127zM12 4.406L14.457 8.4L7.905 19.594H3zm0 8.79l3.276-2.393L21 19.593h-4.086z");
}
</style><path class="abg5cejrw"/>`,
		"fallback": "token-branded:ardr",
	});
}

export default Component;
