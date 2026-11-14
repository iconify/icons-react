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
		"content": `<style>.gr3gc-bdj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 9.499q.001-2.71 3.157-4.537Q7.864 3.25 12 3.25t7.093 1.712Q22.25 6.789 22.25 9.5v4q0 2.711-3.157 4.538Q16.136 19.75 12 19.75t-7.093-1.712Q1.75 16.211 1.75 13.5zM12 5.75Q9.75 5.75 9.75 8T12 10.25T14.25 8T12 5.75M4.25 10q0 2.25 2.25 2.25T8.75 10T6.5 7.75T4.25 10m11 0q0 2.25 2.25 2.25T19.75 10T17.5 7.75T15.25 10m-12 2.817v.683q0 1.846 2.408 3.24Q8.266 18.25 12 18.25t6.342-1.51q2.408-1.394 2.408-3.24v-.683q-.676.653-1.657 1.221Q16.136 15.75 12 15.75t-7.093-1.712q-.981-.568-1.657-1.221");
}
</style><path class="gr3gc-bdj"/>`,
		"fallback": "uix-solid:agar-plate",
	});
}

export default Component;
