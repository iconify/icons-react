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
		"content": `<style>.jodz1st9t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 2.5h-.5q-.932 0-1.591.659T2.5 4.75v.5q0 1.984 1.75 2.219v9.083q-.616.132-1.091.607q-.659.659-.659 1.591v.5q0 2.25 2.25 2.25h.5q1.984 0 2.219-1.75h9.062q.235 1.75 2.219 1.75h.5q2.25 0 2.25-2.25v-.5q0-1.984-1.75-2.219V7.469q1.75-.235 1.75-2.219v-.5q0-2.25-2.25-2.25h-.5q-1.984 0-2.219 1.75H7.469Q7.234 2.5 5.25 2.5m13 4.969v9.062q-1.516.203-1.719 1.719H7.469q-.203-1.516-1.719-1.719V7.469q1.516-.203 1.719-1.719h9.062q.203 1.516 1.719 1.719");
}
</style><path class="jodz1st9t"/>`,
		"fallback": "uix-solid:bounding-box",
	});
}

export default Component;
