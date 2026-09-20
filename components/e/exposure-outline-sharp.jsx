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
		"content": `<style>.vx04fzb3z {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5zm9.5-1v-2h-2v-1.5h2v-2H16v2h2V16h-2v2zM6 8.5h5V7H6z");
}
</style><path class="vx04fzb3z"/>`,
		"fallback": "material-symbols:exposure-outline-sharp",
	});
}

export default Component;
