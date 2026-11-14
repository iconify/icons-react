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
		"content": `<style>.ioalobeqc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 3.25h-4q-2.172 0-3.542 1.869Q1.75 6.766 1.75 9t1.208 3.881Q4.328 14.75 6.5 14.75H16q.787 0 1.383-.337Q19.25 13.358 19.25 9q0-5.749-3.249-5.75zm-.75 1.5v8.5h-2v-8.5zm1.5 8.5v-8.5h2.278Q12.75 6.187 12.75 9q0 2.248.811 3.871q.101.2.207.379zM3.25 9q0-4.083 3-4.243v8.486q-3-.16-3-4.243m7 10q0-2.5 5.75-2.5q2.199 0 3.783.555q1.967.688 1.967 1.945t-1.967 1.945Q18.199 21.5 16 21.5q-5.75 0-5.75-2.5");
}
</style><path class="ioalobeqc"/>`,
		"fallback": "uix-solid:barrel-tipped",
	});
}

export default Component;
