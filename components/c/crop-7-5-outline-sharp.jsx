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
		"content": `<style>.gxhlm2y6d {
  fill: currentColor;
  d: path("M3 19V5h18v14zm2-2h14V7H5zm0 0V7z");
}
</style><path class="gxhlm2y6d"/>`,
		"fallback": "material-symbols:crop-7-5-outline-sharp",
	});
}

export default Component;
