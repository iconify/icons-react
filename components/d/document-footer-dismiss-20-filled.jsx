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
		"content": `<style>.kvk8_fbib {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L13.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L14.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708zM14.5 11a5.5 5.5 0 0 0 1.5-.207V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4.257a5.5 5.5 0 0 0 4.243 9M7 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="kvk8_fbib"/>`,
		"fallback": "fluent:document-footer-dismiss-20-filled",
	});
}

export default Component;
