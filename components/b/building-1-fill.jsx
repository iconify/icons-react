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
		"content": `<style>.u3p_g9bgb {
  fill: currentColor;
  d: path("M3 19h1V6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2.802a2.42 2.42 0 0 1 2.707.491l3 3C19.422 13.008 20 13.961 20 15v4h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m8-13a.997.997 0 0 0-1-1H7a.997.997 0 0 0-1 1v13h2v-4c0-1.039.578-1.992 1.293-2.707L11 10.586Z");
}
</style><path class="u3p_g9bgb"/>`,
		"fallback": "coolicons:building-1-fill",
	});
}

export default Component;
