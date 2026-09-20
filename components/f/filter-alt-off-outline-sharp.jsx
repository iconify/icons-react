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
		"content": `<style>.r86wowbvw {
  fill: currentColor;
  d: path("m14.089 11.264l-.714-.714L16.95 6H8.825l-1-1H19.05zm5.744 9.99L13 14.42V19h-2v-6.579L2.746 4.167l.708-.713l17.092 17.092zM13.375 10.55");
}
</style><path class="r86wowbvw"/>`,
		"fallback": "material-symbols-light:filter-alt-off-outline-sharp",
	});
}

export default Component;
