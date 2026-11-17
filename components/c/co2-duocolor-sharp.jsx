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
		"content": `<style>.du-8yqblj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6H3v8h3m6 0h-2V6h2m0 0h2v8h-2m6-2h3v3h-3v3h3");
}
</style><path class="du-8yqblj"/>`,
		"fallback": "coolicons:co2-duocolor-sharp",
	});
}

export default Component;
