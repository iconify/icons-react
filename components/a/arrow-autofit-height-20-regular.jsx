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
		"content": `<style>.b1w0qbcqt {
  fill: currentColor;
  d: path("m15.003 3.63l1.139 1.18a.5.5 0 1 0 .72-.695L15.04 2.229a.75.75 0 0 0-1.079 0l-1.82 1.886a.5.5 0 1 0 .719.694l1.143-1.183V7.5a.5.5 0 0 0 1 0zM3 5a2 2 0 0 1 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2zm13.142 10.19l-1.14 1.18V12.5a.5.5 0 1 0-1 0v3.874l-1.142-1.183a.5.5 0 1 0-.72.694l1.821 1.886a.75.75 0 0 0 1.08 0l1.82-1.886a.5.5 0 1 0-.72-.694");
}
</style><path class="b1w0qbcqt"/>`,
		"fallback": "fluent:arrow-autofit-height-20-regular",
	});
}

export default Component;
