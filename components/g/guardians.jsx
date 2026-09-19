import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g6cr-f2fq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.051 4.765c-2.106 1.783-3.292 4.187-3.303 6.694c.01 2.498 1.19 4.895 3.283 6.677c2.096-1.782 3.275-4.178 3.286-6.677c0-2.503-1.173-4.906-3.266-6.694m-1.991 38.47V26.986c0-5.75-5.285-13.56-13.56-13.56v16.25c0 8.922 8.234 13.56 13.56 13.56m3.88-.001V26.986c0-5.75 5.286-13.56 13.56-13.56v16.25c0 8.922-8.234 13.56-13.56 13.56");
}
</style><path class="g6cr-f2fq"/>`,
		"fallback": "arcticons:guardians",
	});
}

export default Component;
