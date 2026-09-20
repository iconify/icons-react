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
		"content": `<style>.n9yuc4bda {
  fill: currentColor;
  d: path("m20.9 18.1l-1.4-1.425l1.1-1.1L22 17zM19 16.175l-2-2V13h2zM19 11h-5.175l-7-7L4.8 2H13l6 6zm-7 3.825L19.175 22H14v2h8v-2L2.1 2.1L.7 3.5L4 6.825V20h8zM17 9l-5-5zl-5-5v5z");
}
</style><path class="n9yuc4bda"/>`,
		"fallback": "material-symbols:file-save-off-sharp",
	});
}

export default Component;
