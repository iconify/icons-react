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
		"content": `<style>.uit8cxsjm {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm4 3c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.92.394L11.813 11H8.187l-.727 1.697a.5.5 0 0 1-.92-.394l3-7A.5.5 0 0 1 10 5m-1.385 5h2.77L10 6.77z");
}
</style><path class="uit8cxsjm"/>`,
		"fallback": "fluent:book-letter-20-filled",
	});
}

export default Component;
