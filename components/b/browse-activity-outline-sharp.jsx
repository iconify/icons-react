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
		"content": `<style>.vl8u8qbvj {
  fill: currentColor;
  d: path("M3 9.962v-5.5h18v5.5h-1v-4.5H4v4.5zm0 7.5v-6.5h1v5.5h16v-5.5h1v6.5zm0-6.5v-1h5.312l1.763 3.51L13.675 7h.662l1.48 2.962H21v1h-5.798L13.95 8.49l-3.644 6.47h-.623l-2-4zm-1.23 8.5v-1h20.46v1zm10.23-8.5");
}
</style><path class="vl8u8qbvj"/>`,
		"fallback": "material-symbols-light:browse-activity-outline-sharp",
	});
}

export default Component;
