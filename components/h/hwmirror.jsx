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
		"content": `<style>.h4b83tb8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.476 23.304l-11.91 4.4m11.91-12.275l-11.91 4.401m4.43-13.588c5.913-1.374 11.392 5.328 12.25 14.985s-3.231 18.626-9.14 20.052s-11.41-5.228-12.3-14.877S16.976 7.748 22.88 6.27m-.265-2.796c7.392-1.59 14.24 6.17 15.312 17.352s-4.038 21.566-11.425 23.218s-14.263-6.053-15.374-17.226s3.961-21.6 11.341-23.312");
}
</style><path class="h4b83tb8r"/>`,
		"fallback": "arcticons:hwmirror",
	});
}

export default Component;
