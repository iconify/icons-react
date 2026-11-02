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
		"content": `<style>.dauycwk9f {
  fill: currentColor;
  d: path("M10 3c.265 0 .52.105.707.293L12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 8.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 13l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 14.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="dauycwk9f"/>`,
		"fallback": "coolicons:folder-close-fill-sharp",
	});
}

export default Component;
