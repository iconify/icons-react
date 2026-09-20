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
		"content": `<style>.rh5qesqrt {
  fill: currentColor;
  d: path("M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.257a5.5 5.5 0 0 1-.657-1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.022q.516.048 1 .185V3a2 2 0 0 0-2-2zm4.59 3.992A.5.5 0 0 0 9.5 4h-3l-.09.008A.5.5 0 0 0 6.5 5h3zM16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="rh5qesqrt"/>`,
		"fallback": "fluent:document-one-page-add-16-regular",
	});
}

export default Component;
