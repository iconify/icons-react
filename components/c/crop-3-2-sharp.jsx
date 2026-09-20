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
		"content": `<style>.dq8syh52f {
  fill: currentColor;
  d: path("M4 17V7h16v10z");
}
</style><path class="dq8syh52f"/>`,
		"fallback": "material-symbols-light:crop-3-2-sharp",
	});
}

export default Component;
