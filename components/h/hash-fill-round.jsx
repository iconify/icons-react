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
		"content": `<style>.eh7iqib0q {
  fill: currentColor;
  d: path("M10.508 8h3.984l.516-4.124a.999.999 0 1 1 1.984.248L16.508 8H19a1 1 0 0 1 0 2h-2.742l-.5 4H19a1 1 0 0 1 0 2h-3.492l-.516 4.124a.999.999 0 1 1-1.984-.248L13.492 16H9.508l-.516 4.124a.999.999 0 1 1-1.984-.248L7.492 16H5a1 1 0 0 1 0-2h2.742l.5-4H5a1 1 0 0 1 0-2h3.492l.516-4.124a.999.999 0 1 1 1.984.248Zm-.25 2l-.5 4h3.984l.5-4Z");
}
</style><path class="eh7iqib0q"/>`,
		"fallback": "coolicons:hash-fill-round",
	});
}

export default Component;
