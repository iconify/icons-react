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
		"content": `<style>.gell82b2v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 17.25v2.25q0 2.25 2.25 2.25h1q2.25 0 2.25-2.25V7.526q0-.79-.493-1.405l-.672-.84Q19.976 4.52 19 4.52t-1.586.762l-.67.838q-.494.616-.494 1.406V9.75h-1.5V7.526q0-.79-.493-1.405l-.672-.84Q12.976 4.52 12 4.52t-1.586.762l-.671.838q-.493.616-.493 1.406V9.75h-1.5V7.526q0-.79-.493-1.405l-.672-.84Q5.976 4.52 5 4.52t-1.586.762l-.671.838q-.493.616-.493 1.406V19.5q0 2.25 2.25 2.25h1q.932 0 1.591-.659T7.75 19.5v-2.25h1.5v2.25q0 2.25 2.25 2.25h1q.932 0 1.591-.659t.659-1.591v-2.25zm0-1.5h-1.5v-4.5h1.5zm-7 0h-1.5v-4.5h1.5z");
}
</style><path class="gell82b2v"/>`,
		"fallback": "uix-solid:fence-line",
	});
}

export default Component;
