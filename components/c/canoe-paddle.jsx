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
		"content": `<style>.zg4oyjduw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.718 5.282l-7.425 7.425m0 0za2.5 2.5 0 0 1 0 3.536l-2.475 2.475a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536l2.475-2.475a2.5 2.5 0 0 1 3.536 0m6.01-8.839l2.829 2.829");
}
</style><path class="zg4oyjduw"/>`,
		"fallback": "uix:canoe-paddle",
	});
}

export default Component;
