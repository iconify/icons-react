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
		"content": `<style>.nh4sj0gje {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 5v14h14V5h-2.5v6.116l-2-1.193l-2 1.193V5zm0 14V5z");
}
</style><path class="nh4sj0gje"/>`,
		"fallback": "material-symbols-light:developer-guide-outline-sharp",
	});
}

export default Component;
