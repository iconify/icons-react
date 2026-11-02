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
		"content": `<style>.sz5xs-b3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 7l5 5l-5 5zm9-2v2m0 4v2m0 4v2m9-12l-5 5l5 5z");
}
</style><path class="sz5xs-b3x"/>`,
		"fallback": "coolicons:flip-horizontal-sharp",
	});
}

export default Component;
