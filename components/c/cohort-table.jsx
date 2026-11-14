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
		"content": `<style>.ysi075lch {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.5 2.25q-2.25 0-2.25 2.25T4.5 6.75T6.75 4.5T4.5 2.25M7.25 4.5q0-2.25 2.25-2.25t2.25 2.25T9.5 6.75T7.25 4.5m7.25-2.25q-2.25 0-2.25 2.25t2.25 2.25t2.25-2.25t-2.25-2.25m2.75 2.25q0-2.25 2.25-2.25t2.25 2.25t-2.25 2.25t-2.25-2.25M4.5 7.25q-2.25 0-2.25 2.25t2.25 2.25T6.75 9.5T4.5 7.25M7.25 9.5q0-2.25 2.25-2.25t2.25 2.25t-2.25 2.25T7.25 9.5m7.25-2.25q-2.25 0-2.25 2.25t2.25 2.25t2.25-2.25t-2.25-2.25M2.25 14.5q0-2.25 2.25-2.25t2.25 2.25t-2.25 2.25t-2.25-2.25m7.25-2.25q-2.25 0-2.25 2.25t2.25 2.25t2.25-2.25t-2.25-2.25M2.25 19.5q0-2.25 2.25-2.25t2.25 2.25t-2.25 2.25t-2.25-2.25");
}
</style><path class="ysi075lch"/>`,
		"fallback": "uix-solid:cohort-table",
	});
}

export default Component;
