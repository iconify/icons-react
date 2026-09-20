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
		"content": `<style>.owsmx2b4d {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3.75H5.75a1.75 1.75 0 1 0 0 3.5H7V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm13-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8.97 6.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5.5a.75.75 0 0 1 0-1.5h4.19l-.72-.72a.75.75 0 0 1 0-1.06");
}
</style><path class="owsmx2b4d"/>`,
		"fallback": "fluent:column-arrow-right-20-filled",
	});
}

export default Component;
