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
		"content": `<style>.vb4s2tmtc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12M9.5 6Q6 6 6 9.5q0 1.629.758 2.5Q6 12.871 6 14.5Q6 18 9.5 18q1.629 0 2.5-.758q.871.758 2.5.758q3.5 0 3.5-3.5q0-1.629-.758-2.5q.758-.871.758-2.5Q18 6 14.5 6q-1.629 0-2.5.758Q11.129 6 9.5 6");
}
</style><path class="vb4s2tmtc"/>`,
		"fallback": "uix-solid:embryo",
	});
}

export default Component;
