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
		"content": `<style>.rxiep-ark {
  fill: currentColor;
  d: path("M21 7h-6V5h6zM5 21V5q0-.825.588-1.412T7 3h6v2H7v12.95l5-2.15l5 2.15V11h2v10l-7-3zM7 5h6z");
}
</style><path class="rxiep-ark"/>`,
		"fallback": "material-symbols:bookmark-remove-outline",
	});
}

export default Component;
