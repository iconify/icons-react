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
		"content": `<style>.qtmt2zw-i {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.5 5.5 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.207q.524.149 1 .393V5.5A2.5 2.5 0 0 0 14.5 3zM4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V6H4zm15 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="qtmt2zw-i"/>`,
		"fallback": "fluent:calendar-error-20-regular",
	});
}

export default Component;
