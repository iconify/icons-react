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
		"content": `<style>.ized9kbud {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.414 2.031q.052-.065.117-.117q.117-.093.26-.134t.292-.025q.148.016.279.088q.13.072.224.188Q15.25 5.362 15.25 7q0 3.25-3.25 3.25T8.75 7q0-1.638 2.664-4.969m-.289 9.719q-3.375 0-3.375 3.375v3.75q0 3.375 3.375 3.375h1.75q3.375 0 3.375-3.375v-3.75q0-3.375-3.375-3.375z");
}
</style><path class="ized9kbud"/>`,
		"fallback": "uix-solid:candle-calm",
	});
}

export default Component;
