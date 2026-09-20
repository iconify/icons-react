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
		"content": `<style>.a28bgccdc {
  fill: currentColor;
  d: path("M4 19V5h1v14zm8-2.692L7.692 12L12 7.692l.708.708l-3.1 3.1H20v1H9.608l3.1 3.1z");
}
</style><path class="a28bgccdc"/>`,
		"fallback": "material-symbols-light:horizontal-align-left-sharp",
	});
}

export default Component;
