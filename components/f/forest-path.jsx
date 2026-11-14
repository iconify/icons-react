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
		"content": `<style>.crd3yrxkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5c1.5-4.5 8.5-5.5 8-12c2.5 3.5 2 8.5 3.5 12M7.225 4.236l1.487 2.106a.259.259 0 0 1-.212.408a.354.354 0 0 0-.334.471l.628 1.78A1.5 1.5 0 0 1 7.38 11H4.62a1.5 1.5 0 0 1-1.414-1.999l.628-1.78A.354.354 0 0 0 3.5 6.75a.259.259 0 0 1-.212-.408l1.487-2.106a1.5 1.5 0 0 1 2.45 0M6 11v3.5M19.225 4.236l1.487 2.106a.259.259 0 0 1-.212.408a.354.354 0 0 0-.334.471l.628 1.78A1.5 1.5 0 0 1 19.38 11h-2.76a1.5 1.5 0 0 1-1.414-1.999l.628-1.78a.354.354 0 0 0-.334-.471a.259.259 0 0 1-.212-.408l1.487-2.106a1.5 1.5 0 0 1 2.45 0M18 11v3.5");
}
</style><path class="crd3yrxkj"/>`,
		"fallback": "uix:forest-path",
	});
}

export default Component;
