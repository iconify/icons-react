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
		"content": `<style>.kag-5ccny {
  fill: currentColor;
  d: path("M1 15q0-2.725 2.275-4.362T8.5 9t5.225 1.638T16 15zm0 4v-2h15v2zm0 4v-2h15v2zm17 0v-8q0-2.85-1.95-4.925T11.275 7.3L11 5h5V1h2v4h5l-1.8 18z");
}
</style><path class="kag-5ccny"/>`,
		"fallback": "material-symbols:fastfood-sharp",
	});
}

export default Component;
