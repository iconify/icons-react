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
		"content": `<style>.l6sqs6bwy {
  fill: currentColor;
  d: path("M18.5 10q-.15 0-.2-.15q-.4-1.525-1.513-2.637T14.15 5.7Q14 5.65 14 5.5q0-.175.15-.2q1.525-.4 2.638-1.513T18.3 1.15q.05-.15.2-.15t.2.15q.4 1.525 1.513 2.638T22.85 5.3q.15.025.15.2q0 .15-.15.2q-1.525.4-2.637 1.513T18.7 9.85q-.025.15-.2.15M6 22v-2.5l3-2.1v-3.6L1 17v-3l8-5.6V4q0-.825.588-1.412T11 2t1.413.588T13 4v4.4l8 5.6v3l-8-3.2v3.6l3 2.1V22l-5-1.5z");
}
</style><path class="l6sqs6bwy"/>`,
		"fallback": "material-symbols:flight-spark",
	});
}

export default Component;
