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
		"content": `<style>.amet-4b4p {
  fill: currentColor;
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H6v14h3a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3Zm5 12h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="amet-4b4p"/>`,
		"fallback": "coolicons:clipboard-minus-corner-fill-sharp",
	});
}

export default Component;
