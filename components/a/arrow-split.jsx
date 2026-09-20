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
		"content": `<style>.e6w_aebsk {
  fill: currentColor;
  d: path("M5 12.5v-1h6.792l5.5-5.5H14V5h5v5h-1V6.708L12.208 12.5zm9 6.5v-1h3.292l-3.854-3.842l.72-.72L18 17.293V14h1v5z");
}
</style><path class="e6w_aebsk"/>`,
		"fallback": "material-symbols-light:arrow-split",
	});
}

export default Component;
