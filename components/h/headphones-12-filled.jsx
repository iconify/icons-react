import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hq771gbvi {
  fill: currentColor;
  d: path("M6 1a5 5 0 0 1 5 5v3a2 2 0 0 1-2 2H7.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H10a4 4 0 1 0-8 0h2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H3a2 2 0 0 1-2-2V6a5 5 0 0 1 5-5");
}
</style><path class="hq771gbvi"/>`,
		"fallback": "fluent:headphones-12-filled",
	});
}

export default Component;
