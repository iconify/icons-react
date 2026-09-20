import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e6b9rmb2v {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m69.29-92.83A6 6 0 0 0 192 122h-52.79L165 83.33a6 6 0 0 0-5-9.33H96a6 6 0 0 0-5 9.33L116.79 122H64a6 6 0 0 0-5 9.33l32 48a6 6 0 0 0 10 0l27-40.51l27 40.51a6 6 0 0 0 10 0l32-48a6 6 0 0 0 .29-6.16M148.79 86L128 117.18L107.21 86ZM96 165.18L75.21 134h41.58Zm64 0L139.21 134h41.58Z");
}
</style><path class="e6b9rmb2v"/>`,
		"fallback": "ph:fallout-shelter-light",
	});
}

export default Component;
