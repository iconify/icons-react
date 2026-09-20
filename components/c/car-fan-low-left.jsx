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
		"content": `<style>.pyf3mbfoa {
  fill: currentColor;
  d: path("m14.198 22l-2.996-4.308H4.881q-.572 0-1.009-.363T3.31 16.4l-1.152-5.74q-.148-.777.355-1.372t1.28-.596q.56 0 1.005.387t.637 1.03l1.623 5.641h3.627q.338 0 .637.166q.3.167.497.488l3.239 5.077zM3.481 7.692q-.614 0-1.038-.424T2.02 6.231t.424-1.038t1.038-.424t1.037.424t.424 1.038t-.424 1.037t-1.037.424m13.404 3.693L12.75 7.269l.708-.688l2.927 2.863V3h1v6.444l2.927-2.869l.688.694z");
}
</style><path class="pyf3mbfoa"/>`,
		"fallback": "material-symbols-light:car-fan-low-left",
	});
}

export default Component;
