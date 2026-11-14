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
		"content": `<style>.r3vbphbzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v3H17l-5 4l-5-4h2.5Zm2.5 7v3H4.5m1.625 3h11.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-.75A2.625 2.625 0 0 1 6.125 15.5m-2.625 3h17");
}
</style><path class="r3vbphbzo"/>`,
		"fallback": "uix:additive-manufacturing",
	});
}

export default Component;
