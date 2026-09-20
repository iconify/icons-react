import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c_537qoco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.442V3.26l.005-.02c-11.869 0-21.5 9.632-21.5 21.5h13.197A8.3 8.3 0 0 1 24 16.442m0 16.596V46.24c11.868 0 21.5-9.632 21.5-21.5H32.298A8.3 8.3 0 0 1 24 33.038m12.898-15.743v-.01a14.94 14.94 0 0 0-5.444-5.443h-.01h.01l3.296-5.709a21.26 21.26 0 0 1 7.857 7.857l-5.709 3.296zM5.394 35.49l5.708-3.296a14.94 14.94 0 0 0 5.444 5.444h.01h-.01l-3.296 5.709a21.26 21.26 0 0 1-7.856-7.857");
}

.rkdjjtb-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.101 24.74c0-8.23 6.67-14.899 14.899-14.899m0 29.798c8.23 0 14.899-6.67 14.899-14.899");
}
</style><path class="rkdjjtb-x"/><path class="c_537qoco"/>`,
		"fallback": "arcticons:color-gear",
	});
}

export default Component;
