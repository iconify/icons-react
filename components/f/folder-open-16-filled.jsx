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
		"content": `<style>.iltlh9biq {
  fill: currentColor;
  d: path("M1 4.5v4.967l.991-1.717A3.5 3.5 0 0 1 5.022 6h7.928a2.5 2.5 0 0 0-2.45-2H7.207l-1.56-1.56A1.5 1.5 0 0 0 4.585 2H3.5A2.5 2.5 0 0 0 1 4.5M5.022 7h7.973c1.54 0 2.502 1.667 1.732 3l-1.585 2.745a2.5 2.5 0 0 1-2.165 1.25H3.004c-1.54 0-2.502-1.666-1.732-3L2.857 8.25A2.5 2.5 0 0 1 5.022 7");
}
</style><path class="iltlh9biq"/>`,
		"fallback": "fluent:folder-open-16-filled",
	});
}

export default Component;
