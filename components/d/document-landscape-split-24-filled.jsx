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
		"content": `<style>.y4aa5fble {
  fill: currentColor;
  d: path("M10.5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5zM12 20h8a2 2 0 0 0 2-2v-6h-6a2 2 0 0 1-2-2V4h-2zm4-9.5h5.5l-6-6V10a.5.5 0 0 0 .5.5");
}
</style><path class="y4aa5fble"/>`,
		"fallback": "fluent:document-landscape-split-24-filled",
	});
}

export default Component;
