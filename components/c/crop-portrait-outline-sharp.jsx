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
		"content": `<style>.ruw4ycbmp {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4H6zm0 0V4z");
}
</style><path class="ruw4ycbmp"/>`,
		"fallback": "material-symbols:crop-portrait-outline-sharp",
	});
}

export default Component;
