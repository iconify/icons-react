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
		"content": `<style>.dawr0sbju {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 1.75q3.311 0 5.53 2.22q2.22 2.219 2.22 5.53q0 2.338-.768 4.569q-.394-.069-.857-.069Q13 14 13 17.125v3.024q-1.426 1.101-3 1.101q-2.992 0-5.451-3.981Q2.25 13.546 2.25 9.5q0-3.311 2.22-5.53Q6.689 1.75 10 1.75m6.125 13.5Q18 15.25 18 17.125V18h1v-.875q0-1.875 1.875-1.875t1.875 1.875v3.25q0 1.875-1.875 1.875T19 20.375V19.5h-1v.875q0 1.875-1.875 1.875t-1.875-1.875v-3.25q0-1.875 1.875-1.875m.375 1.875v3.25q0 .375-.375.375t-.375-.375v-3.25q0-.375.375-.375t.375.375m4 3.25q0 .375.375.375t.375-.375v-3.25q0-.375-.375-.375t-.375.375z");
}
</style><path class="dawr0sbju"/>`,
		"fallback": "uix-solid:eggs-protein",
	});
}

export default Component;
