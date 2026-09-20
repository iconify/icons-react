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
		"content": `<style>.pia9o7b6o {
  fill: currentColor;
  d: path("M12 3v6.173h6V21H6V3zm1 0h.654L18 7.462v.711h-5zM9.654 18.173H12.5v-1H9.654zm0-3.788h4.673v-1H9.654z");
}
</style><path class="pia9o7b6o"/>`,
		"fallback": "material-symbols-light:docs-sharp",
	});
}

export default Component;
