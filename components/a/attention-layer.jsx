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
		"content": `<style>.mpmui8yrv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.375 2.25h9.25q2.123 0 3.624 1.501t1.501 3.624v9.25q0 2.123-1.501 3.624t-3.624 1.501h-9.25q-2.123 0-3.624-1.501T2.25 16.625v-9.25q0-2.123 1.501-3.624T7.375 2.25m.625 3q-2.25 0-2.25 2.25T8 9.75q.455 0 .818-.092L10.979 12l-2.161 2.342Q8.455 14.25 8 14.25q-2.25 0-2.25 2.25T8 18.75t2.25-2.25q0-.739-.243-1.235L12 13.106l1.993 2.159q-.243.496-.243 1.235q0 2.25 2.25 2.25t2.25-2.25T16 14.25q-.455 0-.818.092L13.021 12l2.161-2.342q.363.092.818.092q2.25 0 2.25-2.25T16 5.25T13.75 7.5q0 .739.243 1.235L12 10.894l-1.993-2.159q.243-.496.243-1.235q0-2.25-2.25-2.25");
}
</style><path class="mpmui8yrv"/>`,
		"fallback": "uix-solid:attention-layer",
	});
}

export default Component;
