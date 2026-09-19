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
		"content": `<style>.w8ri5cc6j {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z");
}

.x7e247bcz {
  fill: currentColor;
  d: path("M11 7h2v6h-2zm0 8h2v2h-2z");
}
</style><path class="w8ri5cc6j"/><path class="x7e247bcz"/>`,
		"fallback": "ic:baseline-report-gmailerrorred",
	});
}

export default Component;
