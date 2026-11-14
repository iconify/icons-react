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
		"content": `<style>.elt3vc4vj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.556 9.46l.833-2.5q.57-1.71 2.372-1.71h4.478q1.802 0 2.372 1.71l.833 2.5q.316.949-.072 1.79h.867q1.802 0 2.372 1.71l.833 2.5q.404 1.214-.344 2.252t-2.028 1.038H4.928q-1.28 0-2.028-1.038t-.344-2.252l.833-2.5q.57-1.71 2.372-1.71h.867q-.388-.841-.072-1.79");
}
</style><path class="elt3vc4vj"/>`,
		"fallback": "uix-solid:copper-ingot",
	});
}

export default Component;
