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
		"content": `<style>.zq--glbpw {
  fill: currentColor;
  d: path("m13.385 10.116l2-1.193l2 1.193V4h-4zM3 20.077V3h18v14H6.077z");
}
</style><path class="zq--glbpw"/>`,
		"fallback": "material-symbols-light:comment-bank-sharp",
	});
}

export default Component;
