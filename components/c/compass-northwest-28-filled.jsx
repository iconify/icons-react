import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y-pf6qbra {
  fill: currentColor;
  d: path("M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m-.424-8.702a5 5 0 0 1-2.874-2.874L8.783 9.43a.5.5 0 0 1 .646-.647l4.995 1.92a5 5 0 0 1 2.874 2.873l1.919 4.995a.5.5 0 0 1-.646.646z");
}
</style><path class="y-pf6qbra"/>`,
		"fallback": "fluent:compass-northwest-28-filled",
	});
}

export default Component;
