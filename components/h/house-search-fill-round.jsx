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
		"content": `<style>.a5xr4rbxm {
  fill: currentColor;
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22m-3.707-6.292l2 1.999a.999.999 0 1 0 1.414-1.414l-1.999-2a3 3 0 1 0-1.415 1.415");
}
</style><path class="a5xr4rbxm"/>`,
		"fallback": "coolicons:house-search-fill-round",
	});
}

export default Component;
