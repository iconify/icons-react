import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sel2lfbuv {
  fill: currentColor;
  d: path("m31.232 33l10.634 10.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L7.5 9.268V42.75a1.25 1.25 0 1 0 2.5 0V33zm-2.5-2.5H10V11.768zM41.25 33h-3.653l-2.5-2.5h3.684l-7.538-10.26a1.25 1.25 0 0 1 0-1.48L38.78 8.5H13.097l-2.5-2.5H41.25a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33");
}
</style><path class="sel2lfbuv"/>`,
		"fallback": "fluent:flag-off-48-regular",
	});
}

export default Component;
