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
		"content": `<style>.b819_suro {
  fill: currentColor;
  d: path("M11 17c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m0-14v4h2V5.08c3.39.49 6 3.39 6 6.92c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41l-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18zm7 9c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1M6 12c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1");
}
</style><path class="b819_suro"/>`,
		"fallback": "ic:baseline-av-timer",
	});
}

export default Component;
