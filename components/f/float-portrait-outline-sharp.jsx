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
		"content": `<style>.xc4__ubpu {
  fill: currentColor;
  d: path("M4 22V2h16v11h-2V4H6v16h7v2Zm11 0v-7h5v7Zm-3-10Z");
}
</style><path class="xc4__ubpu"/>`,
		"fallback": "material-symbols:float-portrait-outline-sharp",
	});
}

export default Component;
