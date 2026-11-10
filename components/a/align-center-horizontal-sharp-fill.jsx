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
		"content": `<style>.llbxbhlej {
  fill: currentColor;
  d: path("M20 3C20.552 3 21 3.4477 21 4V11H23V13H21V20C21 20.5523 20.552 21 20 21H14C13.448 21 13 20.5523 13 20V13H11V16C11 16.5523 10.552 17 10 17H4C3.448 17 3 16.5523 3 16V13H1V11H3V8C3 7.4477 3.448 7 4 7H10C10.552 7 11 7.4477 11 8V11H13V4C13 3.4477 13.448 3 14 3H20Z");
}
</style><path class="llbxbhlej"/>`,
		"fallback": "keyline-icons:align-center-horizontal-sharp-fill",
	});
}

export default Component;
