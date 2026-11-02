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
		"content": `<style>.oraqi0b4j {
  fill: currentColor;
  d: path("M7 18a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2a1 1 0 0 1 0 2ZM17 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm1 15a1.002 1.002 0 0 1-1.707.707L15 20.414l-1.293 1.293A1 1 0 0 1 12 21v-5.62a3.828 3.828 0 0 1 5.601-5.189A3.83 3.83 0 0 1 18 15.38ZM9 10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><path class="oraqi0b4j"/>`,
		"fallback": "coolicons:certificate-fill-round",
	});
}

export default Component;
