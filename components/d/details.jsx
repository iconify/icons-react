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
		"content": `<style>.ailo9ub1p {
  fill: currentColor;
  d: path("M2 21L12 3l10 18zm3.4-2H11V8.925zm7.6 0h5.6L13 8.925z");
}
</style><path class="ailo9ub1p"/>`,
		"fallback": "material-symbols:details",
	});
}

export default Component;
