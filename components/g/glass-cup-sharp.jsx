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
		"content": `<style>.dye3ux85q {
  fill: currentColor;
  d: path("M6.027 21L4 3h16l-2.008 18zm.51-4.5h10.952L18.866 4H5.116z");
}
</style><path class="dye3ux85q"/>`,
		"fallback": "material-symbols-light:glass-cup-sharp",
	});
}

export default Component;
