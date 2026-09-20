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
		"content": `<style>.j6vg63bjt {
  fill: currentColor;
  d: path("M17.5 2.75a.75.75 0 0 0-1.5 0v4.015c-2.026-1.358-4.867-.881-6.293 1.215L2.353 18.786c-.556.818-.45 1.91.255 2.608a2.1 2.1 0 0 0 2.667.23l10.79-7.469A4.454 4.454 0 0 0 17.24 8h4.009a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L17.5 5.439z");
}
</style><path class="j6vg63bjt"/>`,
		"fallback": "fluent:food-carrot-24-filled",
	});
}

export default Component;
