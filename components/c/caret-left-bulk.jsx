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
		"content": `<style>.zp8xf350k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.293 7.293A1 1 0 0 1 15 8v8a1.002 1.002 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414Z");
}
</style><path class="zp8xf350k"/>`,
		"fallback": "coolicons:caret-left-bulk",
	});
}

export default Component;
