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
		"content": `<style>.ms-_t3bxt {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h6q.425 0 .713.288T14 2t-.288.713T13 3H7v1h6q.425 0 .713.288T14 5t-.288.713T13 6H7v12h10v-1q0-.425.288-.712T18 16t.713.288T19 17v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zm10-9.8V4q0-.425.288-.712T18 3t.713.288T19 4v6.2l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.6 3.6q-.3.3-.7.3t-.7-.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275zM7 4V3zm0 16v1z");
}
</style><path class="ms-_t3bxt"/>`,
		"fallback": "material-symbols:install-mobile-outline-rounded",
	});
}

export default Component;
