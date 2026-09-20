import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w-o4oab9q {
  fill: currentColor;
  d: path("M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v10A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 2h-.585A1.5 1.5 0 0 0 9.5 1zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 3h.585A1.5 1.5 0 0 0 6.5 4h3a1.5 1.5 0 0 0 1.415-1h.585a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5m1 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM8 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 8 9m-1.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="w-o4oab9q"/>`,
		"fallback": "fluent:clipboard-text-rtl-16-regular",
	});
}

export default Component;
