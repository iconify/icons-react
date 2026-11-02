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
		"content": `<style>.tuoq_xbai {
  fill: currentColor;
  d: path("M9 16.586L20.293 5.293a.999.999 0 1 1 1.414 1.414l-12 12a1 1 0 0 1-1.414 0l-6-6a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="tuoq_xbai"/>`,
		"fallback": "coolicons:check-large-fill-round",
	});
}

export default Component;
