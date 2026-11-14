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
		"content": `<style>.k29tyfq3o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 3.25H4.25q-1.036 0-1.768.732T1.75 5.75v12.5q0 2.5 2.5 2.5h15.5q1.036 0 1.768-.732t.732-1.768V5.75q0-1.036-.732-1.768T19.75 3.25m-11 3Q11 6.25 11 8.5v1.75q0 2.25-2.25 2.25H7q-2.25 0-2.25-2.25V8.5q0-2.25 2.25-2.25zm6.5 0H17q2.25 0 2.25 2.25v1.75q0 2.25-2.25 2.25h-1.75Q13 12.5 13 10.25V8.5q0-2.25 2.25-2.25");
}
</style><path class="k29tyfq3o"/>`,
		"fallback": "uix-solid:cinder-block",
	});
}

export default Component;
