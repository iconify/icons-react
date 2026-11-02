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
		"content": `<style>.k0mo6-okb {
  fill: currentColor;
  d: path("M13 3v8h3c.379 0 .725.214.894.553l4 8A1 1 0 0 1 20 21h-5v-4a1 1 0 0 0-2 0v4h-2v-4a1 1 0 0 0-2 0v4H4a1 1 0 0 1-.894-1.447l4-8A1 1 0 0 1 8 11h3V3a1 1 0 0 1 2 0");
}
</style><path class="k0mo6-okb"/>`,
		"fallback": "coolicons:broom-fill-sharp",
	});
}

export default Component;
