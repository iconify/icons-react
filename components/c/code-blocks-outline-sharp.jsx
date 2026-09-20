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
		"content": `<style>.bm3ulwb4t {
  fill: currentColor;
  d: path("m9.6 14.908l.708-.714L8.114 12l2.174-2.175l-.707-.713L6.692 12zm4.8 0L17.308 12L14.4 9.092l-.708.714L15.887 12l-2.195 2.194zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="bm3ulwb4t"/>`,
		"fallback": "material-symbols-light:code-blocks-outline-sharp",
	});
}

export default Component;
