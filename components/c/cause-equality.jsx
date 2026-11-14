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
		"content": `<style>.j4p7o9bsq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 5.75h-13q-1.139 0-1.945.805q-.805.806-.805 1.945q0 2.75 2.75 2.75h13q2.75 0 2.75-2.75T18.5 5.75m-13 7h13q2.75 0 2.75 2.75t-2.75 2.75h-13q-2.75 0-2.75-2.75q0-1.139.805-1.945q.806-.805 1.945-.805");
}
</style><path class="j4p7o9bsq"/>`,
		"fallback": "uix-solid:cause-equality",
	});
}

export default Component;
