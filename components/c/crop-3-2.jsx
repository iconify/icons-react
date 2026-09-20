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
		"content": `<style>.wmhxdvbxs {
  fill: currentColor;
  d: path("M5 18q-.825 0-1.412-.587T3 16V8q0-.825.588-1.412T5 6h14q.825 0 1.413.588T21 8v8q0 .825-.587 1.413T19 18z");
}
</style><path class="wmhxdvbxs"/>`,
		"fallback": "material-symbols:crop-3-2",
	});
}

export default Component;
