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
		"content": `<style>.x9os-ybqb {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm10.039-2.384h4.769v-5.731h.807V10h-2.307v-.615h-1.77V10h-2.307v.885h.807zm.884-.885v-4.846h3v4.846z");
}
</style><path class="x9os-ybqb"/>`,
		"fallback": "material-symbols-light:folder-delete-sharp",
	});
}

export default Component;
