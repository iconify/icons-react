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
		"content": `<style>.nzd6gkp4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.5zA2.25 2.25 0 0 1 8 4.75v6.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-6.5A2.25 2.25 0 0 1 5.75 2.5m0 11h7.5M8 9.5h3.5v4m-2 0v4m-3.25 3l3.25-3l3.25 3m5.514-5.458l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><path class="nzd6gkp4d"/>`,
		"fallback": "uix:chairperson",
	});
}

export default Component;
