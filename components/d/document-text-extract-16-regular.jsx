import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mbxffgity {
  fill: currentColor;
  d: path("M8.586 1a1.5 1.5 0 0 1 1.06.44l2.914 2.914a1.5 1.5 0 0 1 .44 1.06V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v6H3V3a2 2 0 0 1 2-2zM10.5 12a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-4-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm4-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM9 4.5a.5.5 0 0 0 .5.5h2.293L9 2.207z");
}
</style><path class="mbxffgity"/>`,
		"fallback": "fluent:document-text-extract-16-regular",
	});
}

export default Component;
