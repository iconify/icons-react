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
		"content": `<style>.vc3rk4b-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21c0-3.186 2.062-5.42 4.795-6.198m9.455-2.552l1.323 2.93l3.195.352l-2.378 2.163l.652 3.148l-2.792-1.593l-2.792 1.593l.652-3.148l-2.378-2.163l3.195-.352Z");
}
</style><path class="vc3rk4b-v"/>`,
		"fallback": "uix-sharp:influencer-media",
	});
}

export default Component;
