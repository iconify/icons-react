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
		"content": `<style>.claz6zbjh {
  d: path("M8.5 7c-1.25 0-1.25.5-1.25 1.5v.75c0 .75-.5 1.25-1.25 1.25c.75 0 1.25.5 1.25 1.25v.75c0 1 0 1.5 1.25 1.5m4-7c1.25 0 1.25.5 1.25 1.5v.75c0 .75.5 1.25 1.25 1.25c-.75 0-1.25.5-1.25 1.25v.75c0 1 0 1.5-1.25 1.5");
}

.erbwi5cqq {
  d: path("M3 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m12.75 5.25L21 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="erbwi5cqq"/><path class="claz6zbjh"/></g>`,
		"fallback": "uix:graphql-query",
	});
}

export default Component;
