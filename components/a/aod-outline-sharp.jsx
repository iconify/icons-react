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
		"content": `<style>.aw09hdbts {
  fill: currentColor;
  d: path("M8 12h8v-2H8zm1 3.5h6v-2H9zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="aw09hdbts"/>`,
		"fallback": "material-symbols:aod-outline-sharp",
	});
}

export default Component;
