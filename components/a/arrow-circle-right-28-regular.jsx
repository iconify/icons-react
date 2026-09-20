import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u085inb5d {
  fill: currentColor;
  d: path("M14.22 8.97a.75.75 0 0 0 0 1.06l3.22 3.22H8.75a.75.75 0 0 0 0 1.5h8.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14");
}
</style><path class="u085inb5d"/>`,
		"fallback": "fluent:arrow-circle-right-28-regular",
	});
}

export default Component;
