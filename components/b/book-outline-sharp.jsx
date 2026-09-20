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
		"content": `<style>.lod-9obnj {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4h-2v6.116l-2-1.193l-2 1.193V4H6zm0 0V4zm6-9.885l2-1.192l2 1.192l-2-1.192z");
}
</style><path class="lod-9obnj"/>`,
		"fallback": "material-symbols-light:book-outline-sharp",
	});
}

export default Component;
