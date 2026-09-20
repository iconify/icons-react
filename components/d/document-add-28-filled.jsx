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
		"content": `<style>.x1ribx33c {
  fill: currentColor;
  d: path("M14 2v8a2 2 0 0 0 2 2h8v12a2 2 0 0 1-2 2h-9.4A7.5 7.5 0 0 0 4 13.865V4a2 2 0 0 1 2-2zm1.5.5V10a.5.5 0 0 0 .5.5h7.5zm-1.5 18a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20H3.5a.5.5 0 0 0 0 1H7v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H8z");
}
</style><path class="x1ribx33c"/>`,
		"fallback": "fluent:document-add-28-filled",
	});
}

export default Component;
