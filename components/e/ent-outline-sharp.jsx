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
		"content": `<style>.q7-p1izet {
  fill: currentColor;
  d: path("M9.1 22h2l.625-6H15v-2h-3.075l.225-2H17v-2h-6.675zM6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.6 6.375H19v5h-4v2h-2v-4h4v-5h2.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V22zm6.35-9");
}
</style><path class="q7-p1izet"/>`,
		"fallback": "material-symbols:ent-outline-sharp",
	});
}

export default Component;
