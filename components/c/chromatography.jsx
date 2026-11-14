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
		"content": `<style>.pv2upbb2h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 1.75h-7.5q-2.5 0-2.5 2.5v15.5q0 1.036.732 1.768t1.768.732h7.5q1.036 0 1.768-.732t.732-1.768V4.25q0-2.5-2.5-2.5m-7 4.5q0-1.75 1.75-1.75t1.75 1.75T10.5 8T8.75 6.25m4.5 2.5q.932 0 1.591.659T15.5 11t-.659 1.591t-1.591.659Q11 13.25 11 11t2.25-2.25m-4.75 8q0-2.5 2.5-2.5q1.036 0 1.768.732t.732 1.768t-.732 1.768T11 19.25q-2.5 0-2.5-2.5");
}
</style><path class="pv2upbb2h"/>`,
		"fallback": "uix-solid:chromatography",
	});
}

export default Component;
