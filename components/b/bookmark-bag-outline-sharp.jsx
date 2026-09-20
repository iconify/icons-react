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
		"content": `<style>.zf49ggbut {
  fill: currentColor;
  d: path("M9.577 13.462h.846v.788h1.154v-.788h.827v.788h1.154v-.788h.846V8.385h-1.077V6.5h-2.673v1.885H9.577zm1.846-5.077V7.268h1.135v1.115zM6 19.5V4h12v15.5l-6-2.583zm1-1.55l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="zf49ggbut"/>`,
		"fallback": "material-symbols-light:bookmark-bag-outline-sharp",
	});
}

export default Component;
