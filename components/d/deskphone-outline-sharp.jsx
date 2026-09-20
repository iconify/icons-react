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
		"content": `<style>.z_vzh8bkl {
  fill: currentColor;
  d: path("M16.52 19.116h2.192v-14h-2.193zM6.672 13.73h1.462v-1.462H6.673zm0 3h1.462v-1.462H6.673zm0-6.231h7.462v-3H6.673zm3 3.23h1.462v-1.46H9.673zm0 3h1.462v-1.46H9.673zm3-3h1.462v-1.46h-1.462zm0 3h1.462v-1.46h-1.462zm2.846 1.386v-12H5.29v12zm-11.23 1v-14h11.23v-1h4.193v16h-4.193v-1zm1-1v-12z");
}
</style><path class="z_vzh8bkl"/>`,
		"fallback": "material-symbols-light:deskphone-outline-sharp",
	});
}

export default Component;
