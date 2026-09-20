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
		"content": `<style>.hhxqfj7vc {
  fill: currentColor;
  d: path("M4 19V5h16v14zm1-1h14V6H5zm0 0V6z");
}
</style><path class="hhxqfj7vc"/>`,
		"fallback": "material-symbols-light:crop-5-4-outline-sharp",
	});
}

export default Component;
