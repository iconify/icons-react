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
		"content": `<style>.c-5n-cbwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15a2 2 0 0 0 2 2h6a4 4 0 0 0 4-4c0-3.31-3.58-6-8-6a4 4 0 0 0-4 4Zm-6-2h6m-6-3v6m10 1v4m4-4v4m-8 0h12M13 7v4a2 2 0 0 0 2 2h6M5 3h16m-8 0v4");
}
</style><path class="c-5n-cbwu"/>`,
		"fallback": "coolicons:helicopter-round",
	});
}

export default Component;
