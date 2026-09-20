import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.grfi_gwwh {
  fill: currentColor;
  d: path("M10.53 2.72a.75.75 0 0 0-1.06 0L5.22 6.97a.75.75 0 0 0 1.06 1.06L10 4.31l3.72 3.72a.75.75 0 1 0 1.06-1.06zm4.25 10.31l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 15.69l3.72-3.72a.75.75 0 1 1 1.06 1.06");
}
</style><path class="grfi_gwwh"/>`,
		"fallback": "fluent:chevron-up-down-20-filled",
	});
}

export default Component;
