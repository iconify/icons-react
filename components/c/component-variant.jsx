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
		"content": `<style>.q_yfgibqq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.591 3.031q-.659-.66-1.591-.66t-1.591.66l-7.378 7.378q-.66.659-.66 1.591t.66 1.591l7.378 7.378q.659.66 1.591.66t1.591-.66l7.378-7.378q.66-.659.66-1.591t-.66-1.591zm0 6l1.378 1.378q.66.659.66 1.591t-.66 1.591l-1.378 1.378q-.659.66-1.591.66t-1.591-.66l-1.378-1.378q-.66-.659-.66-1.591t.66-1.591l1.378-1.378q.659-.66 1.591-.66t1.591.66");
}
</style><path class="q_yfgibqq"/>`,
		"fallback": "uix-solid:component-variant",
	});
}

export default Component;
