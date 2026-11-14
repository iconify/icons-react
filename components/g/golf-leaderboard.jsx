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
		"content": `<style>.v18aiwbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v12H3Zm4 12v6.5M17 15v6.5M6.5 7h11m-11 4H14");
}
</style><path class="v18aiwbtm"/>`,
		"fallback": "uix-sharp:golf-leaderboard",
	});
}

export default Component;
