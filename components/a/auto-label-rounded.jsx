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
		"content": `<style>.dliu6tmru {
  fill: currentColor;
  d: path("M5 19q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625l3.525 5q.375.525.375 1.15t-.375 1.15l-3.525 5q-.275.4-.712.625T15 19H5Zm4.275-5.75l.8 1.75q.125.3.45.3t.45-.3l.8-1.75l1.75-.8q.3-.125.3-.45t-.3-.45l-1.75-.8l-.8-1.75q-.125-.3-.45-.3t-.45.3l-.8 1.75l-1.75.8q-.3.125-.3.45t.3.45l1.75.8Z");
}
</style><path class="dliu6tmru"/>`,
		"fallback": "material-symbols:auto-label-rounded",
	});
}

export default Component;
