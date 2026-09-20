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
		"content": `<style>.wtngs1fbu {
  fill: currentColor;
  d: path("M12 2v6a2 2 0 0 0 2 2.001h6v10.001a2 2 0 0 1-2 2H9v-3.671a4.5 4.5 0 0 0-5-7.073V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM9 15.502a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-6 3.742v3.044a.71.71 0 0 0 1.212.503L5.5 21.503l1.288 1.288A.71.71 0 0 0 8 22.288v-3.044a4.5 4.5 0 0 1-2.5.758a4.5 4.5 0 0 1-2.5-.758");
}
</style><path class="wtngs1fbu"/>`,
		"fallback": "fluent:document-ribbon-24-filled",
	});
}

export default Component;
