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
		"content": `<style>.d-m-a-ugj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 3.25h14.5q3 0 3 3t-3 3h-.5v9.25q0 1.346-.952 2.298t-2.298.952h-7q-1.346 0-2.298-.952T5.25 18.5V9.25h-.5q-3 0-3-3t3-3m2 6v9.25q0 .725.513 1.237q.512.513 1.237.513h7q.725 0 1.237-.513q.513-.512.513-1.237V9.25zm3.5 1.5h.5Q13 10.75 13 13t-2.25 2.25h-.5Q8 15.25 8 13t2.25-2.25");
}
</style><path class="d-m-a-ugj"/>`,
		"fallback": "uix-solid:atm-card-slot",
	});
}

export default Component;
