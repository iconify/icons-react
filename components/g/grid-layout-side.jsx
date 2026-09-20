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
		"content": `<style>.mkic7mine {
  fill: currentColor;
  d: path("M21 21V3zM5 21h8V3H5q-.825 0-1.412.588T3 5v14q0 .825.588 1.413T5 21m16-2V5q0-.825-.587-1.412T19 3h-4v18h4q.825 0 1.413-.587T21 19");
}
</style><path class="mkic7mine"/>`,
		"fallback": "material-symbols:grid-layout-side",
	});
}

export default Component;
