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
		"content": `<style>.k_eje8bju {
  fill: currentColor;
  d: path("M7 17V3h14v14zm2-2h10V5H9zm-6 6v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="k_eje8bju"/>`,
		"fallback": "material-symbols:flip-to-front-sharp",
	});
}

export default Component;
