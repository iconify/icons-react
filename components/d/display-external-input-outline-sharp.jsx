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
		"content": `<style>.q4xbkb7zs {
  fill: currentColor;
  d: path("m17.442 21.789l-.713-.714L18.809 19h-4.867v-1h4.887l-2.094-2.1l.707-.688l3.289 3.288zM4 20v-5h1v4h4v1zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5z");
}
</style><path class="q4xbkb7zs"/>`,
		"fallback": "material-symbols-light:display-external-input-outline-sharp",
	});
}

export default Component;
