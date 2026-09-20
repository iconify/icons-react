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
		"content": `<style>.y1twhabzr {
  fill: currentColor;
  d: path("M6.385 17.116h3.454l5-9h2.776V6.885h-3.453l-5 9H6.384zM4 20V4h16v16z");
}
</style><path class="y1twhabzr"/>`,
		"fallback": "material-symbols-light:escalator-sharp",
	});
}

export default Component;
