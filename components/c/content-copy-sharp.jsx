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
		"content": `<style>.lc-t36tpr {
  fill: currentColor;
  d: path("M7 18V2h13v16zm-4 4V6h2v14h11v2z");
}
</style><path class="lc-t36tpr"/>`,
		"fallback": "material-symbols:content-copy-sharp",
	});
}

export default Component;
