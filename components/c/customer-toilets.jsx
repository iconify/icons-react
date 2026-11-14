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
		"content": `<style>.n1tny8myz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5za2 2 0 0 1 2 2V19a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2m9-3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.414 7.508l.88 2.493A1.5 1.5 0 0 1 18.38 17h-1.76a1.5 1.5 0 0 1-1.414-1.999l.88-2.493a1.5 1.5 0 0 1 2.828 0M12 2.5v19m4.25-4.5v4m2.5-4v4");
}
</style><path class="n1tny8myz"/>`,
		"fallback": "uix:customer-toilets",
	});
}

export default Component;
