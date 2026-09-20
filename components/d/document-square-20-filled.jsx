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
		"content": `<style>.cjrnley4y {
  fill: currentColor;
  d: path("M11 7.5A1.5 1.5 0 0 0 12.5 9H17v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6zm1-4.4a2 2 0 0 1 .793.486l3.621 3.621A2 2 0 0 1 16.9 8h-4.4a.5.5 0 0 1-.5-.5z");
}
</style><path class="cjrnley4y"/>`,
		"fallback": "fluent:document-square-20-filled",
	});
}

export default Component;
