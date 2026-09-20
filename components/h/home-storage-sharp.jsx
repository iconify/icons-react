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
		"content": `<style>.zh03iabhb {
  fill: currentColor;
  d: path("m5.846 19.385l-1.673-10h15.654l-1.673 10zm3.654-5.5h5v-1h-5zM5.5 8V7h13v1zm2-2.384v-1h9v1z");
}
</style><path class="zh03iabhb"/>`,
		"fallback": "material-symbols-light:home-storage-sharp",
	});
}

export default Component;
