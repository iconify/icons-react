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
		"content": `<style>.t3_p1pbot {
  fill: currentColor;
  d: path("M13 2c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 7h5l-5-5Zm-2.293 9.707l4-4a.999.999 0 1 0-1.414-1.414l-4 4a.999.999 0 1 0 1.414 1.414M10 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 4H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="t3_p1pbot"/>`,
		"fallback": "coolicons:file-percent-fill-sharp",
	});
}

export default Component;
