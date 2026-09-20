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
		"content": `<style>.nrd3w3bsx {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm11-3h5v-5.5h1V10h-2.5V9h-2v1H12v1.5h1zm1.5-1.5v-4h2v4z");
}
</style><path class="nrd3w3bsx"/>`,
		"fallback": "material-symbols:folder-delete-sharp",
	});
}

export default Component;
