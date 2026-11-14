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
		"content": `<style>.bfyfana2w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M8 6.5q2.092 0 2.433 1.75h3.134Q13.908 6.5 16 6.5q2.5 0 2.5 2.5q0 2.092-1.75 2.433v1.134q1.75.341 1.75 2.433q0 2.5-2.5 2.5q-2.092 0-2.433-1.75h-3.134Q10.092 17.5 8 17.5q-2.5 0-2.5-2.5q0-2.092 1.75-2.433v-1.134Q5.5 11.092 5.5 9q0-2.5 2.5-2.5m2.433 7.75h3.134q.275-1.408 1.683-1.683v-1.134q-1.408-.275-1.683-1.683h-3.134q-.275 1.408-1.683 1.683v1.134q1.408.275 1.683 1.683");
}
</style><path class="bfyfana2w"/>`,
		"fallback": "uix-solid:colour-tetradic",
	});
}

export default Component;
