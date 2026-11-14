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
		"content": `<style>.e5twota4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21c0-4.25 3-6.5 7-6.5q1.635 0 2.873.396m5.391.146l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><path class="e5twota4v"/>`,
		"fallback": "uix:critic",
	});
}

export default Component;
