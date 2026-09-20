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
		"content": `<style>.kw83pibmz {
  fill: currentColor;
  d: path("m5.846 19.385l-1.673-10h15.654l-1.673 10zm.829-1h10.65l1.275-8H5.4zm2.825-4.5h5v-1h-5zM5.5 8V7h13v1zm2-2.384v-1h9v1zm-.825 12.769h10.65z");
}
</style><path class="kw83pibmz"/>`,
		"fallback": "material-symbols-light:home-storage-outline-sharp",
	});
}

export default Component;
